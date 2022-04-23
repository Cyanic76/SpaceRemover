function gen() {
	
	// Get the bot scope so we know whether to validate permissions or not.
	let scope_bot = document.getElementById("scope_bot");
	
	// Get the output field
	let output = document.getElementById("output_link");
	
	// Reset values
	output.innerHTML = ".";
	let permissions = 0;
	
	// If bot is checked, validate permissions.
	if(scope_bot.checked === true){
		
		// Administrator permission will be checked at the end.
		
		// Administrator powers
		if(document.getElementById("perm_audit_logs").checked) permissions += 128;
		if(document.getElementById("perm_insights").checked) permissions += 524288;
		if(document.getElementById("perm_server").checked) permissions += 32;
		if(document.getElementById("perm_roles").checked) permissions += 268435456;
		if(document.getElementById("perm_channels").checked) permissions += 16;
		if(document.getElementById("perm_webhooks").checked) permissions += 536870912;
		if(document.getElementById("perm_emotes").checked) permissions += 1073741824;
		if(document.getElementById("perm_events").checked) permissions += 8589934592;
		
		// Moderation powers
		if(document.getElementById("perm_kick").checked) permissions += 2;
		if(document.getElementById("perm_ban").checked) permissions += 4;
		if(document.getElementById("perm_nicknames").checked) permissions += 134217728;
		if(document.getElementById("perm_nick_own").checked) permissions += 67108864;
		if(document.getElementById("perm_messages").checked) permissions += 8192;
		if(document.getElementById("perm_threads").checked) permissions += 17179869184;
		if(document.getElementById("perm_everyone").checked) permissions += 131072;
		
		// Text channels
		if(document.getElementById("perm_view").checked) permissions += 1024;
		if(document.getElementById("perm_message").checked) permissions += 2048;
		if(document.getElementById("perm_invite").checked) permissions += 1;
		if(document.getElementById("perm_thread_public").checked) permissions += 34359738368;
		if(document.getElementById("perm_thread_private").checked) permissions += 68719476736;
		if(document.getElementById("perm_tts").checked) permissions += 4096;
		if(document.getElementById("perm_send_embed").checked) permissions += 16384;
		if(document.getElementById("perm_ext_emotes").checked) permissions += 262144;
		if(document.getElementById("perm_ext_stickers").checked) permissions += 137438953472;
		if(document.getElementById("perm_slash").checked) permissions += 2147483648;
		
		// Voice
		if(document.getElementById("perm_voice_join").checked) permissions += 1048576;
		if(document.getElementById("perm_voice_speak").checked) permissions += 2097152;
		if(document.getElementById("perm_voice_stream").checked) permissions += 512;
		if(document.getElementById("perm_voice_mute").checked) permissions += 4194304;
		if(document.getElementById("perm_voice_deafen").checked) permissions += 8388608;
		if(document.getElementById("perm_voice_move").checked) permissions += 16777216;
		if(document.getElementById("perm_voice_auto").checked) permissions += 33554432;
		if(document.getElementById("perm_voice_priority").checked) permissions += 256;
		if(document.getElementById("perm_voice_activities").checked) permissions += 549755813888;
		if(document.getElementById("perm_voice_raisehand").checked) permissions += 4294967296;
		
		// Administrator permissions overwrites all other ones.
		if(document.getElementById("perm_admin").checked) permissions = 8;
		
	}
	
	// Validate scopes
	let scopes = "";
	if(scope_bot.checked) scopes += " bot";
	if(document.getElementById("scope_guilds").checked) scopes += " guilds";
	if(document.getElementById("scope_identify").checked) scopes += " identify";
	if(document.getElementById("scope_email").checked) scopes += " email";
	if(document.getElementById("scope_app_slash").checked) scopes += " applications.commands";
	if(document.getElementById("scope_app_slash2").checked) scopes += " applications.commands.update";
	if(document.getElementById("scope_connections").checked) scopes += " connections";
	if(document.getElementById("scope_app_store").checked) scopes += " applications.store.update";
	
	// Get app ID
	let id = document.getElementById("id").value;
	if(id === "" || isNaN(id)){
		alert("Application ID may not be empty.");
		return;
	}
	
	// Get redirect
	let redirect = document.getElementById("redirect").value;
	
	// Generate link
	let scopes_encoded = encodeURI(scopes);
	let link = "";
	link = `https://discord.com/oauth2/authorize?client_id=${id}&scopes=${scopes}`;
	if(scope_bot.checked && permissions > 0){
		link += `&permissions=${permissions}`;
	}
	if(redirect){
		link += `&redirect_uri=${encodeURI(redirect)}`;
	}
	if(document.getElementById("require_code").checked){
		link += `&response_type=code`;
	}
	
	// Show link
	output.innerHTML = link;
}
