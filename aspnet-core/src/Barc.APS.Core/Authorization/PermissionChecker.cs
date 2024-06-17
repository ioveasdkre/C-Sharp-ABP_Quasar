using Abp.Authorization;
using Barc.APS.Authorization.Roles;
using Barc.APS.Authorization.Users;

namespace Barc.APS.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
