'use client';
import Button from '../ui/buttons/Button';
import { IconClose, ImageTicket } from '../svg';
import useTicketsStore from '@/lib/store/useTicketsStore';
import { useShoppingMenu } from '@/lib/context/useContextShoppingMenu';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

export default function Shop() {
	const [checkoutButtonLabel, setCheckoutButtonLabel] =
		useState('Go to Checkout');

	const { isMenuOpen, closeShoppingMenu } = useShoppingMenu();

	const ticketsAmount = useTicketsStore(state => state.ticketsAmount);
	const ticketsPrice = useTicketsStore(state => state.ticketsPrice);
	const resetTickets = useTicketsStore(state => state.resetTickets);

	const incrementTickets = useTicketsStore(state => state.incrementTickets);
	const decrementTickets = useTicketsStore(state => state.decrementTickets);
	const setTicketsAmount = useTicketsStore(state => state.setTicketsAmount);

	const article = [
		{
			title: 'Ticket Festival: Fun Zone',
			date: '01 - 03 Oktober 2024',
		},
	];

	const handleMenuClose = () => {
		isMenuOpen && closeShoppingMenu();
	};

	const handleIncrementTickets = () => {
		incrementTickets();
	};

	const handleDecrementTickets = () => {
		decrementTickets();
	};

	const handleSelectChange = e => {
		const value = parseInt(e.target.value, 10);
		setTicketsAmount(value);
	};

	const handleCheckout = async () => {
		if (!ticketsAmount) return;
		try {
			setCheckoutButtonLabel('Loading...');
			const response = await axios.post('/api/get-stripe-session', {
				item: {
					quantity: ticketsAmount,
				},
			});
			const sessionId = response.data.id;
			const stripe = await loadStripe(
				process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
			);
			await stripe.redirectToCheckout({ sessionId });
		} catch (error) {
			setCheckoutButtonLabel('Error, please retry');
			console.error(error);
		}
		setCheckoutButtonLabel('Go to Checkout');
	};

	const { title, date } = article[0];

	return (
		<div className="space-y-8 grid-rows-[auto_1fr_auto] grid h-full">
			<div className="space-y-8">
				<div className="flex justify-between items-center">
					<h4>Shopping Menu</h4>
					<IconClose
						fontSize={30}
						className="cursor-pointer"
						onClick={handleMenuClose}
					/>
				</div>
				<hr />
			</div>
			<div className="space-y-8">
				<div className="flex items-center h-fit">
					<ImageTicket
						width={90}
						height={90}
						className="mx-8 opacity-50"
						color={'var(--primary)'}
					/>
					<div className="w-full px-8 space-y-4">
						<div className="space-y-4">
							<div className="space-y-1">
								<div className="justify-between text-lg">
									<div>{title}</div>
									<p className="text-xs">{date}</p>
								</div>
								<div className="flex justify-between"></div>
							</div>
							<div className="grid-cols-2 grid">
								<h4>${ticketsPrice.toFixed(2)},-</h4>
								{ticketsAmount > 1 && (
									<p className="text-xs">
										{'( '}
										{ticketsAmount} * $
										{ticketsPrice.toFixed(2)},- {')'}
									</p>
								)}
							</div>
							<div className="space-y-3 ">
								<div className="flex gap-8 items-center ">
									<div className="space-x-2">
										<Button
											label="-"
											primary
											textColor="var(--primary)"
											backgroundColor="var(--accent)"
											className="rounded-full aspect-square p-2 w-9 text-lg"
											onClick={() =>
												handleDecrementTickets()
											}
										/>
										<Button
											label="+"
											primary
											textColor="var(--primary)"
											backgroundColor="var(--accent)"
											className="rounded-full aspect-square p-2 w-9 text-lg"
											onClick={() =>
												handleIncrementTickets()
											}
										/>
									</div>
									<form onSubmit={e => e.preventDefault()}>
										<select
											value={ticketsAmount}
											onChange={handleSelectChange}
										>
											{Array.from(
												{ length: 11 },
												(_, i) => (
													<option key={i} value={i}>
														{i}
													</option>
												)
											)}
										</select>
									</form>
								</div>
								<div>
									<Button
										label="Remove all"
										onClick={() => resetTickets()}
										className="p-0 text-xs uppercase"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr />
			</div>
			<hr />
			<div className="space-y-4 w-full h-20 py-4">
				<div className="mx-auto w-fit">
					<Button
						onClick={handleCheckout}
						backgroundColor={`var(--accent)`}
						className={`transition-opacity duration-100 ease-in ${
							ticketsAmount === 0
								? 'cursor-not-allowed opacity-50'
								: ''
						}`}
						textColor="black"
						primary={true}
						disabled={ticketsAmount === 0}
					>
						{checkoutButtonLabel}
					</Button>
				</div>
				<p className="text-xs text-primary text-center">
					Need at least 1 ticket to checkout and a maximum of 10 p.p.
				</p>
			</div>
		</div>
	);
}
