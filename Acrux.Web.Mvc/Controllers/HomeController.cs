using System.Web.Mvc;

namespace Acrux.Web.Mvc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index() => View();


        public JsonResult About() => Json(new
        {
            usuario = "Lucas Juliano",
            email = "lucas.juliano@live.com"

        }, JsonRequestBehavior.AllowGet);
    }
}