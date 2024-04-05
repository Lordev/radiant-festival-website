export default function Header() {
    return (
        <div className="flex gap-5 justify-between items-center px-12 bg-amber-100 max-md:flex-wrap max-md:px-5 fixed w-full z-50 shadow-lg">
            <div className="flex gap-2.5 items-center self-stretch my-auto">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/22e72e59a925b18269aef8a7add808e476c65ebe5f04eb71682f04e6a137ca8a?apiKey=024cf42476ae40309b63a72bc08f46cd&"
                    className="shrink-0 self-stretch my-auto w-11 aspect-square"
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d5b4884d4d11aae7711d1e35481a5708e991febeef8aa7156d47b51f97806ee?apiKey=024cf42476ae40309b63a72bc08f46cd&"
                    className="shrink-0 self-stretch w-12 aaspect-square"
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4503cfd9580f80654dc532715fabc8470f89cb873b0eb0675f2373a32e5b4a7?apiKey=024cf42476ae40309b63a72bc08f46cd&"
                    className="shrink-0 self-stretch my-auto aspect-[1.02] w-[41px]"
                />
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/685099a31dd704142f60837a958428f66b0490c785f44db90f706c2e5e93bcdd?apiKey=024cf42476ae40309b63a72bc08f46cd&"
                className="shrink-0 self-stretch max-w-full aspect-[0.99] w-[125px]"
            />
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cbea1035d02922df7566de644ddea8a1eede63cb27e10ec5092bf80a3f7c452?apiKey=024cf42476ae40309b63a72bc08f46cd&"
                className="shrink-0 self-stretch my-auto max-w-full aspect-[3.23] w-[151px]"
            />
        </div>
    );
}
