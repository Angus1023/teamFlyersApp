angular.module('flyersApp').service('playersService', function(){
    var players = [
        {
            name: "Claude Giroux",
            id:1 ,
            image: "http://media.philly.com/images/011916_claude-giroux_1200.jpg",
            number: 28,
            pos: "Center"
        },
        {
            name: "Wayne Simmonds",
            id:2 ,
            image: "http://www.allaboutthehabs.ca/wp-content/uploads/2015/12/wayne-simmonds-injury.jpg",
            number: 17,
            pos: 'Right Wing'
        },
        {
            name: "Michael Raffl",
            id:3 ,
            image: "http://cdn.abclocal.go.com/content/wpvi/images/cms/1222664_1280x720.jpg",
            number: 12,
            pos: 'Left Wing'
        },
        {
            name: "Shayne Gostisbehere",
            id:4 ,
            image: "http://www.csnphilly.com/sites/csnphilly/files/2016/05/16/ap-shayne-gostisbehere-flyers-celebration.jpg",
            number: 53,
            pos: 'Defence'
        },{
            name: "Michael Del Zotto",
            id:5 ,
            image: "http://www.csnphilly.com/sites/csnphilly/files/2016/05/11/usa-michael-del-zotto-flyers.jpg",
            number: 15,
            pos: 'Defence'
        },{
            name: "Steve Mason",
            id:6 ,
            image: "http://3951-presscdn-28-25.pagely.netdna-cdn.com/wp-content/uploads/2013/10/Steve-Mason.jpg",
            number: 35,
            pos: 'Goalie'
        }
    ]

    this.getPlayers = function() {
        console.log(players);
        return players;
    }

    this.getPlayerById = function(id) {
        for (var i = 0; i < players.length; i++) {
            if (players[i].id == id) {
                console.log(players[i]);
                return players[i];
            }
        }
    }
})