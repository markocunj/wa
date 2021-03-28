import express from "express";
import moment from "moment";
const app = express();
const port = 3000;
moment.locale("hr");
app.get("/", (req, res) => {
  res.send(
    "Danasnji datum mozete vidjeti na /datum, a danasnju prognozu na /prognoza"
  );
});

app.get("/datum", (req, res) => {
  let trenutniDatum = Date.now();
  res.send(moment(trenutniDatum).format("Do MMMM.YYYY, hh:mm"));
});

app.get("/prognoza", (req, res) => {
  let prognoza = ["Suncano", "Kisovito", "Oblacno"];
  var randomPrognoza = prognoza[Math.floor(Math.random() * prognoza.length)];
  res.send(randomPrognoza);
});

app.listen(port, () => console.log(`Port ${port}`));
