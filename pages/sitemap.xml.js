import React from "react";
import fs from "fs";
import { getPosts } from "../services";

const Sitemap = () => {};

const locales = ['en','de','fr']

   
  
export const getServerSideProps = async ({ res }) => {
 

    const baseUrl = {
        development: "http://localhost:3001",
        production: "https://www.ariadnemaps.com",
      }[process.env.NODE_ENV];
     
    
        const posts = await getPosts();
         
        const dynamic = posts
        .map(({node:{slug}}) => {
            
            return `${baseUrl}/post/${slug}`
        })
         
      
        
      
    
    
  
  const staticPages = fs
    .readdirSync({
      development: 'pages',
      production: '.output/server/pages',
    }[process.env.NODE_ENV])
    .filter((staticPage) => {
      return ![
        "api",
        "careers",
        "blog",
        "_app.js",
        "company",
        "industries",
        "solutions",
        "_document.js",
        "_error.js",
        "eurocis-meeting.js",
        "letstalk.js",
        "test.js",
        
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      if(staticPagePath==='industries'){
        
      }
      return `${baseUrl}/${staticPagePath}`;
    });
     

    const industries = fs
    .readdirSync({
      development: 'pages/industries',
      production: '.output/server/pages/industries',
    }[process.env.NODE_ENV])
    .filter((staticPage) => {
      return ![
        "index.js",
        
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      
        return `${baseUrl}/industries/${staticPagePath}`;
       
     
    });

    const solutions = fs
    .readdirSync({
      development: 'pages/solutions',
      production: '.output/server/pages/solutions',
    }[process.env.NODE_ENV])
    .filter((staticPage) => {
      return ![
        "index.js",
        
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      
        return `${baseUrl}/solutions/${staticPagePath}`;
       
     
    });
    
    const company =fs
    .readdirSync({
      development: 'pages/company',
      production: '.output/server/pages/company',
    }[process.env.NODE_ENV])
    .filter((staticPage) => {
      return ![
        "index.js",
        
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      
        return `${baseUrl}/company/${staticPagePath}`;
       
     
    });
    
    const allPages = [...staticPages,...solutions,...industries, ...company, ...dynamic, `${baseUrl}/blog/index.js`,`${baseUrl}/company/index.js`]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;