"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Select from "./Select";
import { articlesTab } from "../data/article";

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState("all");

  const handleArticleChange = (value: any) => {
    setSelectedArticle(value);
  };

  const filteredArticles =
    selectedArticle === "all"
      ? articlesTab
      : articlesTab.filter((article) => article.type === selectedArticle);

  return (
    <section className="flex flex-col gap-4 mb-4">
      <h4 className="text-xl text-primary_dark">Articles</h4>
      <Select article={selectedArticle} onChange={handleArticleChange} />
      {filteredArticles.map((article, index) => (
        <Link
          href={"/blog/conseils/" + article.name!}
          key={index}
          className="flex items-start gap-4"
        >
          <Image
            className="shrink-0"
            src={article.image}
            alt={article.title}
            width={120}
            height={120}
          />
          <p className="text-sm">{article.title}</p>
        </Link>
      ))}
    </section>
  );
};

export default Articles;
