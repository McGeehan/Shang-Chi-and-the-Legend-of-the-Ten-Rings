  enum Choice {
    //% block="Xialing"
    xialing,
    //% block="Shang-Chi"
    shang
}
namespace sprites {
   /**
     * Allow your sprite to jump and come back to the ground
     * before jumping again
     */
    //% block="make $thisSprite=variables_get(mySprite) gravity jump"
    export function gravity_jump (thisSprite: Sprite) {
        if (thisSprite.isHittingTile(CollisionDirection.Bottom)) {
            thisSprite.vy = -200
        }
    }
    /**
     * Set a profile pic and name for your hero in the
     * upper-left hand corner of the screen
     */
    //% block="add corner profile for $choice"
    export function add_profile (choice:Choice) {
        if (choice == Choice.xialing){
            profilelife.setProfileImage(assets.image`Xialing profile`)
            profilelife.setName("Xialing")
        }
        else{
            profilelife.setProfileImage(assets.image`Shang-Chi profile`)
            profilelife.setName("Shang-Chi")
        }
    }
}