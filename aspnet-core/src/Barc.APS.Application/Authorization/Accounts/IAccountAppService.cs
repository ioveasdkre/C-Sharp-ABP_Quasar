using System.Threading.Tasks;
using Abp.Application.Services;
using Barc.APS.Authorization.Accounts.Dto;

namespace Barc.APS.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
