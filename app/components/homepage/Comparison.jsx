import Code from "~/components/Code";
import { usePage } from "~/contexts/PageContext";

export default function Comparison(props) {
  const { pageTheme } = usePage();
  return (
    <section className="comparison" {...props}>
      <hgroup>
        <h2>
          Embrace the <mark>Power&nbsp;of&nbsp;Guided Reasoning</mark>
        </h2>
        <p>Strong goal focus to keep your agents on track.</p>
      </hgroup>
      <div className="grid">
        <div className="pico">
          <p>
            <span className="emoji">😌</span> Pico CSS
          </p>
          <Code language="html" allowCopy={false} dataTheme={pageTheme}>{`<form>
  <input type="text">
  <button type="submit">Action</button>
</form>`}</Code>
        </div>
        <div className="utility-framework">
          <p>
            <span className="emoji">🥵</span> Utility CSS Framework
          </p>
          <Code
            language="html"
            allowCopy={false}
            dataTheme={pageTheme}
          >{`<div class="container display-flex my-md mx-sm">
  <form class="form shadow-md my-md mx-sm align-center">
    <div class="input-wrapper border-radius-sm">
      <input type="text" class="input text-color-gray placeholder-color-light-gray focus-outline-blue">
    </div>
    <div class="button-wrapper border-radius-sm">
      <button type="submit" class="button bg-color-blue text-color-white focus-light-blue hover-light-blue">
        Action
      </button>
    </div>
  </form>
</div>`}</Code>
        </div>
      </div>
    </section>
  );
}
