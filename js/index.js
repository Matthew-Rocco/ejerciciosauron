const listatropas = [];

const eliminarunidad = async function(){
    let res = await Swal.fire({
        title: `¿Asesinar a ${listatropas[this.nro].nombre}?`,
        showCancelButton: true,
        confirmButtonText: "Si!"
    })
    if (res.isConfirmed) {
        listatropas.splice(this.nro,1);
        cargarTabla();
        Swal.fire("Asesinado");
    } else {
        Swal.fire("Salvado");
    }
}

const cargarTabla = () => {
    let tbody = document.querySelector("#tabla-tbody");
    tbody.innerHTML = "";

    for(let i=0; i<listatropas.length;++i) {
        let p= listatropas[i];
        let tr=document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.innerText = p.nombre;
        let tdTipo = document.createElement("td");
        tdTipo.innerText = p.tipo;
        let tdRango = document.createElement("td");
        tdRango.innerText = p.rango;
        let tdVinculo = document.createElement("td");
        tdVinculo.classList.add("text-center");

        let boton = document.createElement("button");
        boton.classList.add("btn","btn-danger");
        boton.innerText = "Asesinado por la aparicion";
        boton.nro = i;
        boton.addEventListener("click", eliminarunidad);
        tdVinculo.appendChild(boton);

        tr.appendChild(tdNombre);
        tr.appendChild(tdTipo);
        tr.appendChild(tdRango);
        tr.appendChild(tdVinculo);

        tbody.appendChild(tr);
    }
}

document.querySelector("#registrar-btn").addEventListener("click", () => {
    let nombre = document.querySelector("#nombre-txt").value;
    let tipo = document.querySelector("#tipo-select").value;
    let rango = document.querySelector("#rango-select").value;

    let unidad = {};
    unidad.nombre = nombre;
    unidad.tipo = tipo;
    unidad.rango = rango;

    listatropas.push(unidad);
    cargarTabla();

    Swal.fire("Exito!", "Unidad Añadida", "success");
});
