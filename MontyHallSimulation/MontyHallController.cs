using Microsoft.AspNetCore.Mvc;
using MontyHallSimulation.Services;

namespace MontyHallSimulation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MontyHallController : ControllerBase
    {
        private readonly MontyHallService _montyHallService;

        public MontyHallController()
        {
            _montyHallService = new MontyHallService();
        }

        [HttpGet]
        public IActionResult simulate(int simulations, bool switchDoor)
        {
            var result = _montyHallService.simulate(simulations, switchDoor);
            return Ok(result);
        }
    }
}
