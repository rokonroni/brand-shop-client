const WhyUs = () => {
    return (
        <>
            <div className="bg-gray-300 dark:bg-gray-700">
                <section className="text-center container py-10 mx-auto md:p-6">
                    <h2 className="mb-16 text-3xl font-bold">
                        Why Choose Us
                    </h2>
                    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                        <div className="mb-12 md:mb-0 shadow-lg p-6 rounded-lg">
                            <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766"
                                    />
                                </svg>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">24/7 Customer Support</h5>
                            <p className="text-neutral-500 dark:text-neutral-300">
                                We are here for you around the clock, providing dedicated and responsive customer support to address your concerns and answer your questions. Your satisfaction is our top priority.
                            </p>
                        </div>
                        <div className="mb-12 md:mb-0 shadow-lg p-6 rounded-lg">
                            <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1.000.43-1.563A6 6 0 1121.75 8.25z"
                                    />
                                </svg>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Safe and Reliable</h5>
                            <p className="text-neutral-500 dark:text-neutral-300">
                                Your safety is our priority. We ensure that your online shopping experience is secure and reliable. Shop with confidence, knowing that your personal information is protected, and your transactions are safe.
                            </p>
                        </div>
                        <div className="md:mb-0 shadow-lg p-6 rounded-lg">
                            <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                                    />
                                </svg>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Lightning-Fast Delivery</h5>
                            <p className="text-neutral-500 dark:text-neutral-300">
                                Experience the speed! Our delivery process is lightning-fast, ensuring that your orders reach you as quickly as possible. We value your time and strive to deliver your products promptly.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default WhyUs;
