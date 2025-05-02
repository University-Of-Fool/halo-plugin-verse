package run.halo.starter;

import org.springframework.stereotype.Component;
import run.halo.app.plugin.BasePlugin;
import run.halo.app.plugin.PluginContext;

@Component
public class VersePlugin extends BasePlugin {

    public VersePlugin(PluginContext pluginContext) {
        super(pluginContext);
    }

}
