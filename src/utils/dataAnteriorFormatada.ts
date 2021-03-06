export default function dataAnteiorFormatada(dataAtual: String){

  const [diaAtual, mesAtual, anoAtual] = dataAtual.split('/').map(String);

  let data= new Date();
  data.setDate(Number(diaAtual));
  data.setDate(data.getDate() - 1);

    let dia  = data.getDate().toString().padStart(2, '0'),
        mes  = (data.getMonth()+1).toString().padStart(2, '0'),
        ano  = data.getFullYear();
    return dia+"/"+mes+"/"+ano;
}