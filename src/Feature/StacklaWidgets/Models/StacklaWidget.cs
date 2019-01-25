using Glass.Mapper.Sc.Configuration.Attributes;

namespace StacklaWidgets.Models
{
    public class StacklaWidget
    {
        [SitecoreField("Stackla Id")] public virtual string StacklaId { get; set; }

        [SitecoreField("Stackla Hash")] public virtual string StacklaHash { get; set; }
    }
}