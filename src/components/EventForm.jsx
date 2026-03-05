import Input from './Input';
import FormTitle from './FormTitle';
import FormField from './FormField';
import Label from './Label';
import Botao from './Botao';
import ListaSuspensa from './ListaSuspensa';

export default function EventForm({temas, adicionarEvento}) {

  function aoFormSubmetido (formData) {
    const evento = {
      capa: formData.get("capa"), 
      tema: temas.find(item => item.id == formData.get("tema")), 
      data: new Date(formData.get("data")), 
      titulo: formData.get("name")
    };
    adicionarEvento(evento);
  }

  return (
    <form className='event-form' action={aoFormSubmetido}>
      <FormTitle texto="Preencha para criar um evento:" />
      <FormField>
        <Label htmlFor="name">Nome do evento:</Label>
        <Input type="text" id="name" name="name" placeholder="Summer dev hits" />
      </FormField>
      <FormField>
        <Label htmlFor="capa">Qual o endereço da imagem da capa?</Label>
        <Input type="text" id="capa" name="capa" placeholder="https://..." />
      </FormField>
      <FormField>
        <Label htmlFor="date">Data do evento:</Label>
        <Input type="date" id="date" name="date" />
      </FormField>
      <FormField>
        <Label htmlFor="tema">Tema do evento:</Label>
        <ListaSuspensa id="tema" name="tema" itens={temas}/>
      </FormField>
      <div className='btn-div'>
        <Botao>Criar evento</Botao>
      </div>
    </form>
  )
}