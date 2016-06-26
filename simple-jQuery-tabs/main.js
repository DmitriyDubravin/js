function simpleTabs(customOptions) {

	var options = $.extend({
		tabsSwitch: 'data-tabs-switch',
		tabsTarget: 'data-tabs-target',
		activeName: 'active'
	},customOptions);

	$(`[${options.tabsSwitch}]`).find('a').on('click',function(e) {
		e.preventDefault();

		var tabsName = $(this).parents(`[${options.tabsSwitch}]`).data(options.tabsSwitch.slice(5)),
			tabIndex = $(this).parent().index(),
			tabs = $(`[${options.tabsTarget} = "${tabsName}"]`).children();

		if(tabs.eq(tabIndex).length) {
			$(this).parents(`[${options.tabsSwitch}]`).children().removeClass(options.activeName);
			$(this).parent().addClass(options.activeName);
			tabs.removeClass(options.activeName);
			tabs.eq(tabIndex).addClass(options.activeName);
		}
	});
}

simpleTabs();
