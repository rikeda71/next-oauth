import Document, {Head, Html, Main, NextScript} from "next/document";
import React from "react";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head title={'oauth example'}>
                </Head>
                <body className='text-center'>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}