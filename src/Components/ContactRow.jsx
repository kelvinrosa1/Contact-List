
export default function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td className="tableId">{contact.name}</td>
      <td className="tableId">{contact.email}</td>
      <td className="tableId">{contact.phone}</td>
    </tr>
  );
}