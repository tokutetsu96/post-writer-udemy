import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem] mx-auto">
          <Link
            href={siteConfig.links.x}
            className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
            target="_blank"
            rel="noreferer"
          >
            Xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Post Writer
          </h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            このアプリケーションはNext.js
            AppRouterで作られたものです。ユーザーは自由に投稿をポストすることができます。
          </p>
          <div className="space-x-4">
            <Link
              href={"/login"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              はじめる
            </Link>
            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noreferer"
            >
              Github
            </Link>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6 mx-auto"
      >
        <div className="text-center space-y-6 max-w-[58rem] mx-auto">
          <h2 className="font-extrabold text3xl md:text-6xl">サービスの特徴</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            このプロジェクトはモダンな技術を使って作られたWebアプリケーションです。Next.jsAppRouterやcontentlayerを利用してマークダウン形式でブログ投稿できます。
          </p>
        </div>
        <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem]">
          <div className="bg-background border p-2 rouded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layout/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rouded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45x"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor">
                  <path d="M21.7 12c0-1.4-1.3-2.7-3.4-3.5V8c.3-2.1-.2-3.6-1.3-4.2c-1.3-.7-3-.2-4.8 1.2c-1.8-1.4-3.5-2-4.7-1.2C6.4 4.4 5.9 5.9 6 8v.5c-2 .8-3.4 2-3.4 3.5c0 1.4 1.4 2.7 3.5 3.5L6 16c-.2 2.1.3 3.6 1.4 4.2c.3.2.8.3 1.2.3a6 6 0 0 0 3.5-1.5a6 6 0 0 0 3.5 1.5c.5 0 .9 0 1.3-.3c1-.6 1.6-2.1 1.3-4.2v-.5c2-.8 3.4-2 3.4-3.5Zm-6-7.5l.8.1c.7.5 1 1.6.9 3.3l-.1.3c-.8-.3-1.7-.4-2.6-.5c-.5-.7-1-1.4-1.7-2c.7-.7 1.7-1.1 2.7-1.2m-8 8.7l.6 1l.6 1c-.5 0-1-.2-1.6-.4l.5-1.6Zm-.4-4L9 8.8l-.6 1l-.5 1l-.5-1.6Zm1 2.8a19.3 19.3 0 0 1 2-3.4a19.9 19.9 0 0 1 3.9 0a19.6 19.6 0 0 1 2 3.4a19.3 19.3 0 0 1-2 3.4a20 20 0 0 1-4 0A20.2 20.2 0 0 1 8.4 12Zm7.8 2.3l.5-1l.5 1.5l-1.6.4l.6-1Zm.5-3.5l-.5-1l-.6-1c.6 0 1 .2 1.6.4zm-4.4-4.5l1.1 1.2a20.9 20.9 0 0 0-2.2 0zM8 4.6c.2 0 .5-.2.7-.1c1 0 2 .5 2.8 1.2c-.7.6-1.3 1.3-1.8 2a8 8 0 0 0-2.6.5v-.3c-.2-1.7.1-2.8.9-3.3M3.7 12c0-.9 1-1.8 2.7-2.5l.8 2.5l-.8 2.5C4.7 13.8 3.7 13 3.7 12M8 19.4c-.8-.5-1-1.6-1-3.3l.1-.3c.9.3 1.7.4 2.6.5c.5.7 1.1 1.4 1.8 2c-1.5 1.1-2.8 1.5-3.5 1Zm3-3a20.3 20.3 0 0 0 2.4 0l-1.2 1.3l-1.1-1.2Zm5.5 3c-.8.4-2.1 0-3.5-1l1.7-2c.9-.2 1.8-.3 2.6-.6v.3c.2 1.7-.1 2.8-.8 3.3m1.6-4.9c-.2-.9-.5-1.7-.9-2.5c.4-.8.7-1.6.9-2.5c1.6.7 2.6 1.6 2.6 2.5c0 .9-1 1.8-2.6 2.5" />
                  <path d="M12.2 13.8a1.8 1.8 0 1 0-1.8-1.8a1.8 1.8 0 0 0 1.8 1.8" />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">React</h3>
                <p className="text-sm text-muted-foreground">
                  lorem. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rouded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">PlanetScale</h3>
                <p className="text-sm text-muted-foreground">
                  lorem. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rouded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624c1.177 1.194 2.538 2.576 5.512 2.576c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">TailwindCSS</h3>
                <p className="text-sm text-muted-foreground">
                  lorem. Lorem ipsum dolor sit amet consectetur adipisicing
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rouded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M29.307 9.932L26.161 0H5.796L2.692 9.932c-1.802 5.75.042 12.271 5.089 16.021L16.01 32l8.208-6.068c5.005-3.75 6.911-10.25 5.089-16.021l-8.214 6.104l3.12 9.938l-8.208-6.13l-8.208 6.104l3.141-9.911l-8.25-6.063l10.177-.063l3.146-9.891l3.141 9.87z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">OAuth</h3>
                <p className="text-sm text-muted-foreground">
                  lorem. Lorem ipsum dolor sit amet consectetur adipisicing
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rouded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305h.003z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Stripe</h3>
                <p className="text-sm text-muted-foreground">
                  lorem. Lorem ipsum dolor sit amet consectetur adipisicing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto md:max-w-[58rem] text-center">
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            Post Writerはログインするとブログ投稿ができるようになります。
          </p>
        </div>
      </section>
      <section
        id="contact"
        className="container py-8 md:py-12 lg:py-24 mx-auto"
      >
        <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4">
          <h2 className="font-extrabold text-3xl md:text-6xl">Contact Me</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            もしもWebサービスが気に入った場合は下記XからDMでご連絡ください。
            <br />
            お仕事のご連絡をお待ちしております。
          </p>
          <Link
            href={siteConfig.links.x}
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferer"
          >
            お仕事はXまで
          </Link>
        </div>
      </section>
    </>
  );
}
