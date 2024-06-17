using System.Threading.Tasks;
using Abp.Application.Services;
using Barc.APS.Sessions.Dto;

namespace Barc.APS.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
