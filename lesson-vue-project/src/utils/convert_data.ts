import xmljs from "xml-js";
export function changeXml2Json(xmlData):string {
  const tmp:string = xmljs.xml2json(xmlData.data, { compact: true, spaces: 4 });
  const jsonData:string = JSON.parse(tmp);
  return jsonData;
}
