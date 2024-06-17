using Abp.Application.Services;
using Barc.APS.MultiTenancy.Dto;

namespace Barc.APS.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

