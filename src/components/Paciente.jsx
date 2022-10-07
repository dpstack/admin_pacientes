import Swal from "sweetalert2";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    
    const { nombre, propietario, email, fecha, sintomas, id } = paciente;

    const handleDelete = () => {
        Swal.fire({
            title: '¿Deseas eliminar este paciente?',
            showDenyButton: true,
            confirmButtonText: 'Si, eliminar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id)
                Swal.fire('Eliminado correctamente!', '', 'success')
            }
          })
    }
    
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="lg:flex justify-between mt-6">
                <button onClick={() => setPaciente(paciente)} className=" py-2 px-20 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">Editar</button>
                <button onClick={handleDelete} className="py-2 px-20 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">Eliminar</button>
            </div>

        </div>
    )
}

export default Paciente