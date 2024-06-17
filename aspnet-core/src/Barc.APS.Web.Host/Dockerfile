FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src
COPY ["src/Barc.APS.Web.Host/Barc.APS.Web.Host.csproj", "src/Barc.APS.Web.Host/"]
COPY ["src/Barc.APS.Web.Core/Barc.APS.Web.Core.csproj", "src/Barc.APS.Web.Core/"]
COPY ["src/Barc.APS.Application/Barc.APS.Application.csproj", "src/Barc.APS.Application/"]
COPY ["src/Barc.APS.Core/Barc.APS.Core.csproj", "src/Barc.APS.Core/"]
COPY ["src/Barc.APS.EntityFrameworkCore/Barc.APS.EntityFrameworkCore.csproj", "src/Barc.APS.EntityFrameworkCore/"]
WORKDIR "/src/src/Barc.APS.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/Barc.APS.Web.Host", "src/Barc.APS.Web.Host"]
COPY ["src/Barc.APS.Web.Core", "src/Barc.APS.Web.Core"]
COPY ["src/Barc.APS.Application", "src/Barc.APS.Application"]
COPY ["src/Barc.APS.Core", "src/Barc.APS.Core"]
COPY ["src/Barc.APS.EntityFrameworkCore", "src/Barc.APS.EntityFrameworkCore"]
WORKDIR "/src/src/Barc.APS.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:7.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "Barc.APS.Web.Host.dll"]
