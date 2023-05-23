using TESTAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Data;


namespace TESTAPI.Controllers

{
    [Route("api/[controller]")]
    [ApiController]
    public class AnimalController : Controller
    {
        private readonly IConfiguration _configuration;

        public AnimalController(IConfiguration configuration)
        {
            this._configuration = configuration;
        }
        // GET: ProductoController
        [HttpGet]
        public ActionResult GetAnimals()
        {
            DataTable dt = new DataTable();
            try
            {
                using (SqlConnection sqlconnection = new SqlConnection(_configuration.GetConnectionString("TESTAPI")))
                {
                    sqlconnection.Open();
                    SqlDataAdapter sqlDA = new SqlDataAdapter("GetAnimals", sqlconnection);
                    sqlDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                    sqlDA.Fill(dt);

                }
                var result = JsonConvert.SerializeObject(dt);
                return Ok(result.ToLower());

            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // GET: ProductoController/Details/5
        [HttpGet("{id}")]
        public ActionResult GetAnimalId(int id)
        {
            Animal producto = new Animal();
            try
            {
                using (SqlConnection sqlconnection = new SqlConnection(_configuration.GetConnectionString("TESTAPI")))
                {
                    DataTable dt = new DataTable();
                    sqlconnection.Open();
                    SqlDataAdapter sqlDA = new SqlDataAdapter("GetAnimalId", sqlconnection);
                    sqlDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                    sqlDA.SelectCommand.Parameters.AddWithValue("Id", id);
                    sqlDA.Fill(dt);
                    if (dt.Rows.Count == 1)
                    {
                        producto.AnimalId = Convert.ToInt32(dt.Rows[0]["AnimalId"].ToString());
                        producto.Name = dt.Rows[0]["Name"].ToString();
                        producto.Breed = dt.Rows[0]["Breed"].ToString();
                        producto.BirthDate = Convert.ToDateTime(dt.Rows[0]["BirthDate"].ToString());
                        producto.Sex = dt.Rows[0]["Sex"].ToString();
                        producto.Price = Convert.ToDouble(dt.Rows[0]["Price"].ToString());
                        producto.Status = dt.Rows[0]["Status"].ToString();
                    }
                    return Ok(producto);
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // GET: ProductoController/Create
        [HttpPost]
        public ActionResult AddAnimal([FromBody] Animal producto)
        {
            try
            {
                using (SqlConnection sqlconnection = new SqlConnection(_configuration.GetConnectionString("TESTAPI")))
                {
                    sqlconnection.Open();
                    SqlCommand sqlCmd = new SqlCommand("AddAnimal", sqlconnection);
                    sqlCmd.CommandType = CommandType.StoredProcedure;
                    sqlCmd.Parameters.AddWithValue("Name", producto.Name);
                    sqlCmd.Parameters.AddWithValue("Breed", producto.Breed);
                    sqlCmd.Parameters.AddWithValue("BirthDate", producto.BirthDate);
                    sqlCmd.Parameters.AddWithValue("Sex", producto.Sex);
                    sqlCmd.Parameters.AddWithValue("Price", producto.Price);
                    sqlCmd.Parameters.AddWithValue("Status", producto.Status);
                    sqlCmd.ExecuteNonQuery();
                }
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


        // GET: ProductoController/Edit/5
        [HttpPut("{id}")]
        public ActionResult UpdateAnimal(int AnimalId, [FromBody] Animal animal)
        {
            try
            {
                using (SqlConnection sqlconnection = new SqlConnection(_configuration.GetConnectionString("TESTAPI")))
                {
                    sqlconnection.Open();
                    SqlCommand sqlCmd = new SqlCommand("UpdateAnimal", sqlconnection);
                    sqlCmd.CommandType = CommandType.StoredProcedure;
                    sqlCmd.Parameters.AddWithValue("Id", AnimalId);
                    sqlCmd.Parameters.AddWithValue("Name", animal.Name);
                    sqlCmd.Parameters.AddWithValue("Breed", animal.Breed);
                    sqlCmd.Parameters.AddWithValue("BirthDate", animal.BirthDate);
                    sqlCmd.Parameters.AddWithValue("Sex", animal.Sex);
                    sqlCmd.Parameters.AddWithValue("Price", animal.Price);
                    sqlCmd.Parameters.AddWithValue("Status", animal.Status);
                    sqlCmd.ExecuteNonQuery();
                }

                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


        // GET: ProductoController/Delete/5
        [HttpDelete("{id}")]
        public ActionResult DeleteAnimal(int AnimalId)
        {
            try
            {
                using (SqlConnection sqlconnection = new SqlConnection(_configuration.GetConnectionString("TESTAPI")))
                {
                    sqlconnection.Open();
                    SqlCommand sqlCmd = new SqlCommand("DeleteAnimal", sqlconnection);
                    sqlCmd.CommandType = CommandType.StoredProcedure;
                    sqlCmd.Parameters.AddWithValue("AnimalId", AnimalId);
                    sqlCmd.ExecuteNonQuery();
                    return Ok();
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


    }
}
