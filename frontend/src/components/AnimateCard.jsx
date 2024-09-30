import React from "react";
import TypeWriter from "typewriter-effect";
function AnimateCard() {
  console.log();
  return (
    <p className="p-6  text-gray-200 font-mono font-bold">
      <TypeWriter
        options={{
          strings: [
            `&lt;!DOCTYPE html&gt; <br /> &lt;html lang=en&gt;
             <br /> &lt;head&gt;{" "}
      <br />
      &lt;meta charset="UTF-8" /&gt; <br /> &lt;meta name="viewport"
      content="width=device-width, initial-scale=1.0" /&gt; <br />
      &lt;title&gt;home page &lt;/title&gt; <br /> &lt;/head&gt; <br />{" "}
      &lt;body&gt; <br />
      &lt;h1&gt;hello world &lt;/h1&gt; <br /> &lt;/body&gt; <br />{" "}
      &lt;/html&gt;`,
          ],
          autoStart: true,
          loop: true,
          delay: 50,
        }}
      />
    </p>
  );
}

export default AnimateCard;
