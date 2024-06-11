import { renderToString } from "react-dom/server";
import DOMPurify from "dompurify";

export default function InfoCard() {
  return (
    <section className="pb-8 my-14 App-header opacity-100 border-top__2pxDashed max-w-718px">
      <div id="heading" className="pt-10 text-3xl font-medium">
        Experience
      </div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
          <div id="topic">
            <div className="text-3xl font-semibold">About</div>
            <div className="pt-2">
              <div className="text-lg font-medium">Innovate Tech Inc</div>
              <div className="text-lg font-medium">2020 - present</div>
            </div>
          </div>
          <div
            id="details"
            className="dynamic-content text-lg font-medium col-span-1"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                renderToString(
                  <p>
                    Mikhail Petrovski is a dynamic product designer known for
                    his passion and creativity in translating innovative ideas
                    into tangible, user-centric designs. With a sharp eye for
                    detail and a commitment to pushing the boundaries of
                    innovation, he consistently delivers market-leading
                    solutions that seamlessly blend aesthetics and
                    functionality. Petrovski's track record highlights his
                    ability to transform abstract concepts into compelling and
                    cutting-edge products.
                  </p>
                )
              ),
            }}
          />
        </div>
      </div>
    </section>
  );
}
