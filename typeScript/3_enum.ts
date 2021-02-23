// спомогателний структура enum
enum Membership {
Simple,
Standaad,
Premium
}
const membership = Membership.Standaad
const membershipReverse = Membership[2]
console.log(membershipReverse)
console.log(membership)

enum Socialmedia {
    vk = 'vk',
    fb = 'fb',
    inst = 'inst'
}

const socialMedia = Socialmedia.vk
console.log(socialMedia) 