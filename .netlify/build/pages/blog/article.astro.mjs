/* empty css                                    */
import { c as createComponent, d as renderComponent, r as renderTemplate } from '../../chunks/astro/server_BGMPX5oY.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, N as Navbar, F as Footer, S as ScrollUpButton } from '../../chunks/ScrollUpButton_DGOsIrtG.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
export { renderers } from '../../renderers.mjs';

const Article = ({ articleData }) => {
  const { title, subtitle, date, image, content, footer } = articleData;
  return /* @__PURE__ */ jsx("div", { className: "relative flex justify-center bg-bgDark2 pt-2", children: /* @__PURE__ */ jsx("div", { className: "px-2 sm:px-4", children: /* @__PURE__ */ jsxs("article", { className: "mt-16 sm:mt-24 mb-24 p-8 rounded-3xl w-full lg:w-[1200px] 2xl:w-[1400px] text-center", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-12", children: [
      /* @__PURE__ */ jsx("div", { className: "my-4 text-secondaryText text-sm", children: date }),
      /* @__PURE__ */ jsx("h1", { className: "mb-4 font-bold text-[2rem] text-primaryText xs:text-[2.8rem] lg:text-[3.5rem]", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-secondaryText text-lg", children: subtitle })
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: image,
        alt: title,
        className: "mx-auto mt-8 mb-8 rounded-3xl w-10/12 md:w-3/4",
        "aria-label": title
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        className: "mx-auto mt-16 w-full md:w-10/12 lg:w-2/3 text-secondaryText sm:text-xl text-left sm:text-justify !leading-8 sm:!leading-10",
        "aria-labelledby": "content-title",
        dangerouslySetInnerHTML: { __html: content }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mx-auto mt-8 w-4/5 lg:w-2/3 text-primaryText text-xl text-right", children: footer })
  ] }) }) });
};

const blog1 = new Proxy({"src":"/_astro/blog1.UgsBnp9Y.jpg","width":1792,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/darthkenar/IOSEPH/landing/src/assets/images/blog1.jpg";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const articleData = {
    title: "AI and Machine Learning",
    subtitle: "Discover insights and trends in the world of data analytics",
    date: "June 5, 2024",
    image: blog1.src,
    content: `
    <p>AI and Machine Learning are now vital components of contemporary technology. These innovations are revolutionizing industries by offering new insights and automating tasks that were once considered unachievable. In the realms of finance and startups, AI and ML are transforming how businesses analyze data and make strategic decisions.</p>
    <p>In financing, AI is being leveraged to assess credit risk and enhance investment strategies. For startups, machine learning algorithms are instrumental in understanding customer behavior and optimizing operations. The scope of these technologies is extensive and continues to expand as we create more sophisticated algorithms and advanced computational power.</p>
    <p>Stay engaged as we delve deeper into the impact of AI and ML on business analytics and financing in our forthcoming articles.</p><br/>
    <div class="mb-4 text-white text-2xl">Machine Learning in Startups</div>
    <p>Startups are increasingly adopting AI and Machine Learning to gain a competitive edge. These technologies help in automating routine tasks, thereby saving time and resources. For instance, AI-powered chatbots enhance customer service by providing instant responses to queries, while ML algorithms analyze large datasets to extract actionable insights.</p>
    <p>By integrating AI and ML, startups can better understand market trends, customer preferences, and operational inefficiencies. This integration not only fosters innovation but also drives growth by enabling data-driven decision-making.</p>
    <p>Join us in our next articles as we uncover more ways AI and ML are revolutionizing the startup ecosystem.</p><br/>
    <div class="mb-4 text-white text-2xl">Future Trends in AI</div>
    <p>The future of business analytics is poised to be heavily influenced by advancements in AI and Machine Learning. Predictive analytics, powered by these technologies, will enable businesses to foresee market changes and adapt proactively. This predictive capability is crucial for startups and financial institutions aiming to stay ahead of the curve.</p>
    <p>Moreover, the rise of AI-driven automation will lead to more efficient and accurate data processing, reducing the margin of error and improving overall productivity. As algorithms become more advanced, the potential for AI and ML to uncover hidden patterns and trends will only grow.</p>
    <p>Stay tuned as we continue to explore the evolving landscape of AI and its transformative impact on business analytics and financing.</p>
  `,
    footer: "~ Duncan Idaho"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": articleData.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/darthkenar/IOSEPH/landing/src/components/Navbar.jsx", "client:component-export": "Navbar" })} ${renderComponent($$result2, "Article", Article, { "articleData": articleData })} ${renderComponent($$result2, "Footer", Footer, {})} ${renderComponent($$result2, "ScrollUpButton", ScrollUpButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/darthkenar/IOSEPH/landing/src/components/ScrollUpButton", "client:component-export": "ScrollUpButton" })} ` })}`;
}, "/home/darthkenar/IOSEPH/landing/src/pages/blog/article/index.astro", void 0);

const $$file = "/home/darthkenar/IOSEPH/landing/src/pages/blog/article/index.astro";
const $$url = "/blog/article";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
