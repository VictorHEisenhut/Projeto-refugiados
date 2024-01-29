﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Data;
using ProjetoRefugiadosApi.Dtos.Abrigo;
using ZstdSharp.Unsafe;

namespace ProjetoRefugiadosApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AbrigosController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public AbrigosController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Abrigos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Abrigo>>> GetAbrigos()
        {
            var abrigos = await _context.Abrigos.ToListAsync();
            foreach (var abrigo in abrigos)
            {
                abrigo.Endereco = await _context.Enderecos.FirstOrDefaultAsync(a => a.Id == abrigo.EnderecoId);
            }

            return abrigos;
        }

        // GET: api/Abrigos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Abrigo>> GetAbrigo(int id)
        {
            var abrigo = await _context.Abrigos.FindAsync(id);
            abrigo.Endereco = await _context.Enderecos.FirstOrDefaultAsync(a => a.Id == abrigo.EnderecoId);


            if (abrigo == null)
            {
                return NotFound();
            }

            return abrigo;
        }

        // PUT: api/Abrigos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAbrigo(int id, Abrigo abrigo)
        {
            abrigo.Endereco = await _context.Enderecos.FirstOrDefaultAsync(a => a.Id == abrigo.EnderecoId);

            if (id != abrigo.Id)
            {
                return BadRequest();
            }

            _context.Entry(abrigo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AbrigoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Abrigos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Abrigo>> PostAbrigo(CreateAbrigoDto abrigoDto)
        {
            var abrigo = _mapper.Map<Abrigo>(abrigoDto);
            abrigo.Endereco = await _context.Enderecos.FirstOrDefaultAsync(a => a.Id == abrigoDto.EnderecoId);

            _context.Abrigos.Add(abrigo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAbrigo", new { id = abrigo.Id }, abrigo);
        }

        // DELETE: api/Abrigos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAbrigo(int id)
        {
            var abrigo = await _context.Abrigos.FindAsync(id);
            abrigo.Endereco = await _context.Enderecos.FirstOrDefaultAsync(a => a.Id == abrigo.EnderecoId);
            if (abrigo == null)
            {
                return NotFound();
            }

            _context.Abrigos.Remove(abrigo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AbrigoExists(int id)
        {
            return _context.Abrigos.Any(e => e.Id == id);
        }
    }
}
