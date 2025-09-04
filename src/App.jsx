import React, { useState } from "react";

export default function CadastroCliente() {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    sexo: "",
    email: "",
    telefone: "",
    rua: "",
    complemento: "",
    cidade: "",
    estado: "",
    cep: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-600 to-white-600 p-6">
      {/* Cabeçalho */}
      <header className="w-full max-w-4xl bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 px-6 rounded-t-2xl shadow-lg">
        <h1 className="text-xl font-bold text-center">Formulário de Cadastro de Clientes</h1>
      </header>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white shadow-lg rounded-b-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Nome */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Primeiro Nome *</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Sobrenome *</label>
          <input
            type="text"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Sexo */}
        <div className="flex flex-col col-span-1 md:col-span-2">
          <label className="text-sm font-medium">Sexo *</label>
          <select
            name="sexo"
            value={formData.sexo}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Selecione...</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">E-mail *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="exemplo@email.com"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Telefone */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Número de telefone *</label>
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Endereço */}
        <div className="flex flex-col col-span-1 md:col-span-2">
          <label className="text-sm font-medium">Rua *</label>
          <input
            type="text"
            name="rua"
            value={formData.rua}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div className="flex flex-col col-span-1 md:col-span-2">
          <label className="text-sm font-medium">Complemento</label>
          <input
            type="text"
            name="complemento"
            value={formData.complemento}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Cidade *</label>
          <input
            type="text"
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Estado *</label>
          <input
            type="text"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div className="flex flex-col col-span-1 md:col-span-2">
          <label className="text-sm font-medium">CEP *</label>
          <input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            placeholder="00000-000"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Botão */}
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="w-full md:w-1/3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 rounded-lg shadow-md hover:opacity-90 transition"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
