// este es el comentario nuevo
import "@babel/polyfill";
import app from "./server";

const main = async () => {
  await app.listen(app.get("port"));
  console.log("Server started on port", app.get("port"));
};

main();
