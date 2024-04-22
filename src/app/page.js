import Image from "next/image";

export default function Home() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-4 bg-light border p-5">
          <h2 className="text-center h3">Column 1</h2>
          <p>HTML stands for HyperText Markup Language. It is the standard language used to create and design web pages on the internet</p>
        </div>
        <div className="col-sm-8 bg-light border p-5">
          <h2 className="text-center h3">Column 2</h2>
          <p>CSS or Cascading Style Sheets is a stylesheet language used to add styles to the HTML document. It describes how HTML elements should be displayed on the web page</p>
        </div>
      </div>
    </div>
  );
}
