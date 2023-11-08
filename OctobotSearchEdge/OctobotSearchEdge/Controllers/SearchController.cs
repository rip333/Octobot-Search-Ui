using Microsoft.AspNetCore.Mvc;
using Models.Cerebro;
using Services.Cerebro;

namespace OctobotSearchEdge.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class SearchController : ControllerBase
	{

		private readonly ILogger<SearchController> _logger;
		private readonly ICerebroService _cerebroService;

		public SearchController(ILogger<SearchController> logger, ICerebroService cerebroService)
		{
			_logger = logger;
			_cerebroService = cerebroService;
		}

		[HttpGet]
        public async Task<IActionResult> Get(string query)
        {
			var parameters = Search.Search.GetParametersFromText(query);
			var response = await _cerebroService.SearchCards(parameters);
			var cardList = response.ToList();

			foreach(var card in cardList) {
				card.ImageUrl = card.GetImageUrl();
			}

            return Ok(cardList);
        }
	}
}