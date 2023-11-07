using Microsoft.AspNetCore.Mvc;

namespace OctobotSearchEdge.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class SearchController : ControllerBase
	{

		private readonly ILogger<SearchController> _logger;

		public SearchController(ILogger<SearchController> logger)
		{
			_logger = logger;
		}

		[HttpGet]
        public IActionResult Get(string query)
        {
            // Your search logic here
            return Ok("You searched for: " + query);
        }
	}
}