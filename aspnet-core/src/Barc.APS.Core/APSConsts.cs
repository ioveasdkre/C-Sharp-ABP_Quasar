using Barc.APS.Debugging;

namespace Barc.APS
{
    public class APSConsts
    {
        public const string LocalizationSourceName = "APS";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "7962c768b9334d1899b4a5164ca1723f";
    }
}
