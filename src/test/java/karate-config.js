function fn() {
	karate.configure('ssl', false);


    var config = {
        baseUrl : 'http://localhost:8080'
    };
    return config;
}