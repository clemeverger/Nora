"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { articlesTab } from "../data/article";

const Article = () => {
  const currentRoute = usePathname();
  const slugStartIndex =
    currentRoute.indexOf("/conseils/") + "/conseils/".length;
  const slug = currentRoute.slice(slugStartIndex);
  const articleData = articlesTab.find((article: any) => article.name === slug);

  const route = useRouter();
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2" onClick={() => route.back()}>
          <Image
            src={"/arrow-left.svg"}
            alt={"search"}
            width={20}
            height={20}
          />
          Retour
        </span>
        <Link
          href={""}
          className="relative bg-primary_light h-auto rounded-full p-2"
        >
          <Image src={"/share.svg"} alt={"icon"} width={28} height={28} />
        </Link>
      </div>
      <div className="mt-4">
        <span className="bg-primary py-1 px-2 rounded-lg text-sm text-primary_dark">
          {articleData?.type}
        </span>
        <h2 className="text-2xl mt-3 text-primary_dark">
          {articleData?.title}
        </h2>
        <p className="text-sm text-primary_dark opacity-70 mt-3">
          {"Temps de lecture : " + articleData?.time}
        </p>
        <p className="text-sm text-primary_dark mt-1">{articleData?.date}</p>
      </div>
      <div className="bg-orange rounded-xl py-4 px-20 mt-4">
        <Image
          src={"/fruits.svg"}
          alt={"Fruits image"}
          width={170}
          height={170}
          className="margin-x-auto"
        ></Image>
      </div>
      <div className="flex mt-3 items-center">
        <Image
          src="/article1.svg"
          className="w-16 rounded-full shadow-lg mr-3"
          alt="Avatar circle"
          width={48}
          height={48}
        ></Image>
        <div className="flex flex-col space-y-1 text-primary_dark">
          <p>Dr Boni</p>
          <p className="font-light text-sm">Dieteticienne</p>
        </div>
      </div>
      <div className="flex flex-col space-y-4 mt-6 mb-8">
        <p className="text-primary_dark">Une définition</p>
        <p className="text-primary_dark font-light">{articleData?.desc}</p>
        <p className="text-primary_dark">{articleData?.titleSection1}</p>
        <p className="text-primary_dark font-light">{articleData?.section1}</p>
        <p className="text-primary_dark">{articleData?.titleSection2}</p>
        <p className="text-primary_dark font-light">{articleData?.section2}</p>
        <p className="text-primary_dark">{articleData?.titleSection3}</p>
        <p className="text-primary_dark font-light">{articleData?.section3}</p>
      </div>
    </div>
  );
};

export default Article;
