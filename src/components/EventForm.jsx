import Input from './Input';
import FormTitle from './FormTitle';
import FormField from './FormField';
import Label from './Label';

export default function EventForm() {
  return (
    <form className='event-form'>
      <FormTitle texto="Preencha para criar um evento:" />
      <FormField>
        <Label htmlFor="name">Nome do evento:</Label>
        <Input type="text" id="name" name="name" placeholder="Summer dev hits" />
      </FormField>
      <FormField>
        <Label htmlFor="date">Data do evento:</Label>
        <Input type="date" id="date" name="date" />
      </FormField>
    </form>
  )
}