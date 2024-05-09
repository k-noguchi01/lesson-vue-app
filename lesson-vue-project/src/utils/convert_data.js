import xmljs from "xml-js";
export function changeXml2Json(xmlData) {
  const tmp = xmljs.xml2json(xmlData.data, { compact: true, spaces: 4 });
  const jsonData = JSON.parse(tmp);
  return jsonData;
}
