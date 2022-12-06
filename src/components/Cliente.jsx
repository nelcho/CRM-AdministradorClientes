import {useNavigate, Form, redirect} from "react-router-dom"
import {eliminarCliente} from "../data/Clientes"

export async function action({params}) {
    await eliminarCliente(params.clienteId)
    return redirect("/")
}

const Cliente = ({cliente}) => {

    const navigate = useNavigate()

    const {nombre, empresa, email, telefono, id} = cliente

  return (
        <tr className="border-b">
            <td className="p-4 space-y-1">
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p>{empresa}</p>
            </td>
            <td className="p-4">
                <p className="text-gray-600"><span className="text-gray-800 font-bold">Email: </span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800 font-bold">Telefono: </span>{telefono}</p>
            </td>
            <td className="p-4 flex gap-4">
                <button className="text-blue-600 hover:text-blue-700 uppercase font-bold" type="button" onClick={() => navigate(`/clientes/${id}/editar`)}>Editar</button>
                <Form
                    method="POST"
                    action={`/clientes/${id}/eliminar`}
                    onSubmit={(evento) => {
                        if(!confirm("¿Desea Eliminar Este Registro?")) {
                            evento.preventDefault()
                        }
                    }}
                >
                <button className="text-red-600 hover:text-red-700 uppercase font-bold" type="submit">Eliminar</button></Form>
            </td>
        </tr>
  )
}

export default Cliente
