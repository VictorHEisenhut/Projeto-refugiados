﻿using System.ComponentModel.DataAnnotations;

namespace ProjetoRefugiados.Models
{
    public class Endereco
    {
        [Key]
        public int Id { get; set; }
        public string? Estado { get; set; }
        public string? Cidade { get; set; }
        public string? Bairro { get; set; }
        public string? Rua { get; set; }
        public string? Complemento { get; set; }
        public int? Numero { get; set; }
        public string? CEP { get; set; }

    }
}
