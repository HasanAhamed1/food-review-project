import React from "react";

const Blog = () => {
  return (
    <div className="m-14">
      <div className="border-2 mt-5 p-5">
        <h2 className="text-2xl font-bold pb-2">What is Context API?</h2>
        <p>
          <b>Context API:</b> We need props to pass data from one component to
          another component. By Context API we don't need any props to pass data
          from one component to another component. Context provides a way to
          pass data through the component tree without having to pass props down
          manually at every level.
        </p>
      </div>
      <div className="border-2 mt-5 p-5">
        <h2 className="text-2xl font-bold pb-2">What is Semantic tag?</h2>
        <p>
          <b>Semantic Tag:</b> Semantic tags are those tags which are meaningful
          for the browser and also for the developer. That means developer can
          easily understand the meaning of html tag which are semantic. Semantic
          tags make it clear to the browser what the meaning of a page and its
          content is. As a example, here I use b tag for bolt the text. Browser
          can understand that b means bolt and it will show that text in bolt
          from, bt developer can't easily get the meaning of b tag. When we use
          header tag for ceater header part, we can easily understand the
          meaning of header tag, that it will work for header and that's why
          it's called semantic tag. There are so many semantic tag. For example:
          header, section, footer, main, nav, summary etc.
        </p>
      </div>
      <div className="border-2 mt-5 p-5">
        <h2 className="text-2xl font-bold pb-2">
          Inline vs Block vs Inline-Block element:
        </h2>
        <p>
          <b>Inline:</b> Inline element is those element which does not start on
          a new line. It does not take the full width. As example: span, b, i,
          button, img, q etc.
        </p>
        <p>
          <b>Block:</b> Block element is those element which start on a new line
          and the browsers automatically add some space before and after the
          element. It always takes the full width. As a example: p, div, nav,
          main, h1 etc.
        </p>
        <p>
          <b>Display Inline:</b> We can use a block element as inline element by
          using display:inline element. But we can't set the width and height.
        </p>
        <p>
          <b>Display Inline-Block:</b> Display:Inline-block works just like as
          display inline. But we can set the width and height
        </p>
        <p>
          <b>Display Block:</b> We can use an inline element as a block element
          bt using display:block. It will take the full width as like block
          element. And we can set width and height.
        </p>
      </div>
    </div>
  );
};

export default Blog;
