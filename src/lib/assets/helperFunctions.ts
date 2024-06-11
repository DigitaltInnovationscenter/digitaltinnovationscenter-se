import MarkdownIt from "markdown-it";
import DOMPurify from "dompurify";

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const options: any = { year: "numeric", month: "short", day: "numeric" };

  const formatter = new Intl.DateTimeFormat("sv-SE", options);
  const parts: any = formatter.formatToParts(date);

  const day = parts.find((part: any) => part.type === "day").value;
  const month = parts.find((part: any) => part.type === "month").value;
  const year = parts.find((part: any) => part.type === "year").value;
  const formattedDate = `${month.charAt(0).toUpperCase() + month.slice(1)} ${day}, ${year}`;

  return formattedDate;
}

export function parseMarkdown(messages: string) {
  try {
    const md = new MarkdownIt({
      breaks: true,
      linkify: true,
      typographer: true,
    });

    let rawHtmlContent = md.render(messages);

    // Wrap the content in a div with the class 'assistant-elem'
    const wrapperDiv = document.createElement("div");
    wrapperDiv.className = "space-y-2";
    wrapperDiv.innerHTML = rawHtmlContent;

    const headings = wrapperDiv.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headings.forEach((elem) => (elem.className = "font-medium text-xl pt-4"));

    const paragraph = wrapperDiv.querySelectorAll("p, span").forEach((p) => {
      p.className = "font-light text-gray-700";

      p.querySelectorAll("u").forEach((underline) => {
        underline.classList.add("underline");
      });
    });

    const underline = wrapperDiv.querySelectorAll("u");
    underline.forEach((elem) => (elem.className = "underline"));

    // Select all <ul> and <ol> elements
    wrapperDiv.querySelectorAll("ul, ol").forEach((list) => {
      // Add Tailwind classes to <ul> and <ol>
      list.classList.add(
        "px-4",
        "bg-transparent",
        "rounded-xl",
        "text-gray-700",
        "font-light"
      );

      // Select all <li> elements within these lists
      list.querySelectorAll("li").forEach((listItem) => {
        // Add Tailwind classes to <li>
        listItem.classList.add("pl-0", "pt-2", "list-disc");

        // Select nested <ul> elements within <li>
        listItem.querySelectorAll("ul").forEach((nestedList) => {
          // Add Tailwind classes to nested <ul>
          nestedList.classList.add("mt-0", "px-0");
        });
      });
    });

    // Serialize back to HTML
    rawHtmlContent = wrapperDiv.outerHTML;

    return DOMPurify.sanitize(rawHtmlContent);
  } catch (error) {
    console.error("parseMarkdown: ", error);
  }
}
