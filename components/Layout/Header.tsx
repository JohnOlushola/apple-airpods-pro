import Head from "next/head";
import React from "react";
import { Link } from "types/link";

export default function Header() {
  const links: Link[] = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Mac",
      url: "/",
    },
    {
      title: "iPad",
      url: "/",
    },
    {
      title: "iPhone",
      url: "/",
    },
    {
      title: "Watch",
      url: "/",
    },
    {
      title: "TV",
      url: "/",
    },
    {
      title: "Music",
      url: "/",
    },
    {
      title: "Support",
      url: "/",
    },
    {
      title: "Search",
      url: "/",
    },
    {
      title: "Bag",
      url: "/",
    },
  ];

  return (
    <div className="bg-black w-full text-white">
      <Head>
        <title>AirPods Pro - Apple</title>
        <meta
          name="description"
          content="AirPods Pro. Active Noise Cancellation, Transparency mode, and a customizable fit — all in an incredibly light in-ear headphone."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <ul className="h-11 flex justify-between items-center">
          {links.map((link) => (
            <li className="list-none">
              <a
                className="text-sm font-light text-gray-300"
                href={link.url}
                target={link.target}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <div className="py-2.5 flex justify-between items-center border-b border-gray-600">
          <a className="text-xl font-normal leading-relaxed">AirPods Pro</a>
          <div className="inline-flex items-center">
            <a href="/" className="text-xs text-gray-300 font-light mr-5">
              Overview
            </a>
            <a href="/" className="text-xs text-gray-300 font-light mr-5">
              Tech Specs
            </a>
            <a
              href="/"
              className="text-xs text-gray-300 font-light bg-blue-600 px-3 py-1 rounded-xl"
            >
              Buy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
