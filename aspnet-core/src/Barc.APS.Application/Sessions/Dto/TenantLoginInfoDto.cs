using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Barc.APS.MultiTenancy;

namespace Barc.APS.Sessions.Dto
{
    [AutoMapFrom(typeof(Tenant))]
    public class TenantLoginInfoDto : EntityDto
    {
        public string TenancyName { get; set; }

        public string Name { get; set; }
    }
}
