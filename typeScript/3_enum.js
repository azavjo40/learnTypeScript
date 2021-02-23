// спомогателний структура enum
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standaad"] = 1] = "Standaad";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standaad;
var membershipReverse = Membership[2];
console.log(membershipReverse);
console.log(membership);
var Socialmedia;
(function (Socialmedia) {
    Socialmedia["vk"] = "vk";
    Socialmedia["fb"] = "fb";
    Socialmedia["inst"] = "inst";
})(Socialmedia || (Socialmedia = {}));
var socialMedia = Socialmedia.vk;
console.log(socialMedia);
