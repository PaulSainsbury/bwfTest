var fixture = {
  exerciseTypes : {
    stretch : "Stretch",
    mobility : "Mobility",
    hold : "Hold",
    cardioStrength : "Cardio / Strength",
    skill : "Skill",
    strength : "Strength",
    rest : "Rest"
  },
  linkTypes : {
    video: "Video",
    image: "Image"
  }
};

function addExercises () {
  Exercises._ensureIndex('shortName', {unique: 1});
  fixture.Exercises = {};
  var exerciseTypes = fixture.exerciseTypes,
    exercises = fixture.Exercises,
    linkTypes = fixture.linkTypes,
    lastExercise;

  // *****************************
  // *         WARM UP           *
  // *****************************
  exercises.wallExtension = lastExercise = insertExercise("wallExtension",
    exerciseTypes.stretch,
    "Wall Extensions",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://youtu.be/d6V2Exzb324"
  );

  exercises.bandDislocates = lastExercise = insertExercise("bandDislocates",
    exerciseTypes.stretch,
    "Band Dislocates",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://youtu.be/WyW5jGGxoZk"
  );

  exercises.catCamel = lastExercise = insertExercise("catCamel",
    exerciseTypes.stretch,
    "Cat/Camel Bends",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://youtu.be/K9bK0BwKFjs"
  );

  exercises.bodyCircles = lastExercise = insertExercise("bodyCircles",
    exerciseTypes.stretch,
    "Cat/Camel Bends",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise (from http://reddit.com/r/bodyweightfitness)",
    "https://youtu.be/xqmbqBl8BjY"
  );
  addLink(exercises.bodyCircles,
    linkTypes.video,
    "Video of Exercise (from http://fitloo.co)",
    "https://youtu.be/yRigKuEou7k"
  );

  exercises.frontSideLegSwings = lastExercise = insertExercise("frontSideLegSwings",
    exerciseTypes.stretch,
    "Front and Side Leg Swings",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://youtu.be/4aoUZEZFJF8"
  );

  // *****************************
  // *       Wrist Mobiliy       *
  // *****************************
  exercises.fingerPulses = lastExercise = insertExercise("fingerPulses",
    exerciseTypes.mobility,
    "Finger Pulses",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=mSZWSQSSEjE"
  );

  exercises.palmPulses = lastExercise = insertExercise("palmPulses",
    exerciseTypes.mobility,
    "Palm Pulses",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=mSZWSQSSEjE"
  );

  exercises.ssPalmRolls = lastExercise = insertExercise("ssPalmRolls",
    exerciseTypes.mobility,
    "Side-to-Side Palm Rotations/Rolls",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=mSZWSQSSEjE"
  );

  exercises.ffElbowRotations = lastExercise = insertExercise("ffElbowRotations",
    exerciseTypes.mobility,
    "Front Facing Elbow Rotations",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=mSZWSQSSEjE"
  );

  exercises.ssWristStretchDown = lastExercise = insertExercise("ssWristStretchDown",
    exerciseTypes.mobility,
    "Side-to-Side Wrist Stretch (Palms Down)",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=mSZWSQSSEjE"
  );

  exercises.rfWristStretchDown = lastExercise = insertExercise("rfWristStretchDown",
    exerciseTypes.mobility,
    "Rear Facing Wrist Stretch (Palms Down)",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=mSZWSQSSEjE"
  );

  exercises.rfWristStretchUp = lastExercise = insertExercise("rfWristStretchUp",
    exerciseTypes.mobility,
    "Rear Facing Wrist Stretch (Palms Up)",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=mSZWSQSSEjE"
  );

  exercises.rfElbowRotationsUp = lastExercise = insertExercise("rfElbowRotationsUp",
    exerciseTypes.mobility,
    "Rear Facing Elbow Rotations (Palms Up)",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=mSZWSQSSEjE"
  );

  exercises.ffWristStretchDown = lastExercise = insertExercise("ffWristStretchDown",
    exerciseTypes.mobility,
    "Forward Facing Wrist Stretch (Palms Down)",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=mSZWSQSSEjE"
  );

  // *****************************
  // *      Bodyline Work        *
  // *****************************
  exercises.plank = lastExercise = insertExercise("plank",
    exerciseTypes.hold,
    "Plank",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://youtu.be/44ScXWFaVBs"
  );

  exercises.sidePlank = lastExercise = insertExercise("sidePlank",
    exerciseTypes.hold,
    "Side Plank",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://youtu.be/44ScXWFaVBs"
  );

  exercises.reversePlank = lastExercise = insertExercise("reversePlank",
    exerciseTypes.hold,
    "Reverse Plank",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://youtu.be/44ScXWFaVBs"
  );

  exercises.hollowHold = lastExercise = insertExercise("hollowHold",
    exerciseTypes.hold,
    "Hollow Hold",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://youtu.be/44ScXWFaVBs"
  );

  exercises.arch = lastExercise = insertExercise("arch",
    exerciseTypes.hold,
    "Arch (Superman)",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://youtu.be/44ScXWFaVBs"
  );

  // *****************************
  // *         Activity          *
  // *****************************
  exercises.squatJump = lastExercise = insertExercise("squatJump",
    exerciseTypes.cardioStrength,
    "Squat Jump",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://youtu.be/CVaEhXotL7M"
  );

  exercises.burpee = lastExercise = insertExercise("burpee",
    exerciseTypes.cardioStrength,
    "Burpee",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://youtu.be/41knz-ZUiBU"
  );

  // *****************************
  // *         Skill Work        *
  // *****************************
  exercises.wallPlank = lastExercise = insertExercise("wallPlank",
    exerciseTypes.skill,
    "Wall Plank",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=6jm4R3K4sJA"
  );

  exercises.wallHandstand = lastExercise = insertExercise("wallHandstand",
    exerciseTypes.skill,
    "Wall Handstand",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=dRycbwdcz7Y"
  );

  exercises.freeHandstand = lastExercise = insertExercise("freeHandstand",
    exerciseTypes.skill,
    "Freestanding Handstand",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=N3K9SMNKL7Y"
  );

  exercises.parallelBarSupport = lastExercise = insertExercise("parallelBarSupport",
    exerciseTypes.skill,
    "Parallel Bar Support",
    "description"
  );
  addLink(lastExercise,
    linkTypes.image,
    "Image of Exercise",
    "http://antranik.org/wp-content/uploads/2014/01/antranik-holding-support-hold-on-parallel-bars.jpg"
  );

  exercises.ringSupport = lastExercise = insertExercise("ringSupport",
    exerciseTypes.skill,
    "Ring Support Hold",
    "description"
  );
  addLink(lastExercise,
    linkTypes.image,
    "Image of Exercise",
    "http://i.imgur.com/hGRuEkA.jpg"
  );

  exercises.rtoSupport = lastExercise = insertExercise("rtoSupport",
    exerciseTypes.skill,
    "Rings Turned Our Support Hold",
    "description"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=8gmyhBScTLk"
  );


  // *****************************
  // *       Strength Work       *
  // *****************************
  exercises.negativePullup = lastExercise = insertExercise("negativePullup",
    exerciseTypes.strength,
    "Negative Pullup",
    "Jump to the top of the pullup position, then slowly lower yourself until your arms are straight. Build up to 10s negatives."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "http://vimeo.com/76666801"
  );

  exercises.pullup = lastExercise = insertExercise("Pullup",
    exerciseTypes.strength,
    "Pullup",
    "* Body slightly hollow with straight legs throughout the whole exercise. Don't cross your legs.\n* If you cannot get straight legs, it's preferable to keep the feet in front of the body rather than behind.\n* Arms straight at the bottom. Don't think about anything else, just straight arms. The rest will happen automatically.\n* Strive for chest to bar at the top. For this the forearms have to deviate from vertical, which may be a bit hard on the elbows, so build up to it slowly.\n* Keep the neck in a neutral position: avoid craning it to get your chin over the bar\n* It's natural for your legs to come forward: this keeps your centre of mass under the bar. Just make sure you're not violently swinging them upwards."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "http://www.youtube.com/watch?v=RsnbDcsZbpk"
  );

  exercises.lsitPullup = lastExercise = insertExercise("lsitPullup",
    exerciseTypes.strength,
    "L-sit Pullup",
    "Hold your legs in an L-sit position, perform a pullup."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "http://www.youtube.com/watch?v=quFBLtkxMRM"
  );

  exercises.pullover = lastExercise = insertExercise("pullover",
    exerciseTypes.strength,
    "Pullover",
    "From a hang with straight arms, pullup while simultaneously bringing the legs up and spin around the bar. You'll end up on top of the bar. To get back down, reverse the motion: roll forward and then lower the legs while performing a negative pullup to get to a hang."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "http://www.youtube.com/watch?v=saLtuweg8As"
  );

  exercises.parallelBarDips = lastExercise = insertExercise("parallelBarDips",
    exerciseTypes.strength,
    "Parallel Bar Dips",
    "* Straight or slightly hollow body. No bending at the hips!\n* Lock out the arms and depress the shoulderblades (what does that even mean?) at the top\n *Go as far down as you can\n *Elbows in"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "http://www.youtube.com/watch?v=ddEeZY_ii2c"
  );

  exercises.ringDips = lastExercise = insertExercise("ringDips",
    exerciseTypes.strength,
    "Ring Dips",
    "Starting from a support position with the rings turned out, perform a dip. It's okay if the rings turn in, just make sure you turn them out at the top."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "http://www.youtube.com/watch?v=2Vymm8nH4wM"
  );

  exercises.ringLsitDips = lastExercise = insertExercise("ringLsitDips",
    exerciseTypes.strength,
    "Rings L-sit Dips",
    "With your legs in an L-sit position, perform a dip. Make sure to turn out the rings at the top!\n\nIf this is too difficult, do them tucked and as you get stronger, extend the legs."
  );

  exercises.assistedSquat = lastExercise = insertExercise("assistedSquat",
    exerciseTypes.strength,
    "Assisted Squat",
    "Grab something in front of you and use your hands to assist in the squat. Reduce assistance over time."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=OuR_Fp7AB0c"
  );

  exercises.squat = lastExercise = insertExercise("squat",
    exerciseTypes.strength,
    "Squat",
    "Stand up straight at the top\n* Sit back down rather than bending through the knees. Think about keeping your shin vertical (it doesn't have to be vertical).\n* Go as low as you can, preferably until the hips are below the knees\n* Don't let the knees come inward on either the descend or the ascend; think about pushing the knees out"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=AkQbbDGMzJk"
  );

  exercises.deepStepUp = lastExercise = insertExercise("deepStepUp",
    exerciseTypes.strength,
    "Deep Step up",
    "Putting one leg up on a high object in front of you, put all of your weight on the front leg and step up to the object. Aim to minimize pushing off with the back leg. To make it harder, increase the height of the object, or hold some weight."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=487aR3A7HvM"
  );

  exercises.footSupportedLsit = lastExercise = insertExercise("footSupportedLsit",
    exerciseTypes.strength,
    "Foot Supported L-sit",
    "Sit down on the ground with your legs straight in front of you. Put your hands next to your thighs and push yourself up (straight arms!), leaving your feet on the ground. Hold for the assigned time period."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=IUZJoSP66HI#t=40s"
  );

  exercises.oneLegFootSupportedLsit = lastExercise = insertExercise("oneLegFootSupportedLsit",
    exerciseTypes.strength,
    "One-Leg Foot Supported L-sit",
    "Do a foot supported L-sit, but raise one of your legs up from the ground."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=IUZJoSP66HI#t=2m33s"
  );

  exercises.tuckLsit = lastExercise = insertExercise("tuckLsit",
    exerciseTypes.strength,
    "Tuck L-sit",
    "Sit down on the floor with your feet close to your butt (you can bend at the legs). Put your hands next to your butt and push yourself up (straight arms!)."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=IUZJoSP66HI#t=2m59s"
  );

  exercises.advTuckLsit = lastExercise = insertExercise("advTuckLsit",
    exerciseTypes.strength,
    "Advanced Tuck L-sit or One-Leg L-sit",
    "Either tuck less than before, or stay tucked and extend only one leg straight like in a real L-sit."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=IUZJoSP66HI#t=2m59s"
  );

  exercises.lsit = lastExercise = insertExercise("lsit",
    exerciseTypes.strength,
    "L-sit",
    "The preferable way to do these is one the floor\n* Depress the shoulderblades; don't let the shoulders shrug up!\n* No bending of the legs\n* Straight arms"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=ek76IXnE9tE"
  );

  exercises.verticalPushup = lastExercise = insertExercise("verticalPushup",
    exerciseTypes.strength,
    "Vertical Pushup",
    "Standing next to a wall, put your hands on the wall and perform a pushup."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "http://www.youtube.com/watch?v=a6YHbXD2XlU"
  );

  exercises.inclinePushup = lastExercise = insertExercise("inclinePushup",
    exerciseTypes.strength,
    "Incline Puship",
    "Finding some raised object, put your hands on said object and perform a pushup. Lower the height to increase the difficulty."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "http://www.youtube.com/watch?v=dWbmyYpNONk"
  );

  exercises.pushup = lastExercise = insertExercise("pushup",
    exerciseTypes.strength,
    "Full Pushup",
    "Body in a straight line from head to toe: don't let the hips sag!\n* Lock out arms and protract the shoulderblades at the top\n* Go down until chest nearly touches the ground\n* Keep the elbows in, don't let them flare out\n* Don't shrug up your shoulders to your ears, focus on depressing the shoulderblades."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "http://www.youtube.com/watch?v=Eh00_rniF8E"
  );

  exercises.diamondPushup = lastExercise = insertExercise("diamondPushup",
    exerciseTypes.strength,
    "Diamond Pushup",
    "Put your hands close together so the thumbs and index fingers touch, then perform a pushup.\nIf this is too difficult, put your hands a bit further apart."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "http://www.youtube.com/watch?v=s8Ft6xyN5fw"
  );

  exercises.ringsWidePushup = lastExercise = insertExercise("ringsWidePushup",
    exerciseTypes.strength,
    "Rings Wide Pushup",
    "Starting from a plank position on the rings, come down while allowing the elbows to come out to the side (the rings can turn in). Go until your forearm makes a 90 degree angle with the upper arm and come back up. Turn out the rings again at the top."
  );

  exercises.ringsPushup = lastExercise = insertExercise("ringsPushup",
    exerciseTypes.strength,
    "Rings Pushup",
    "Perform a pushup on the rings. Turn out the rings at the top."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "http://gymnasticswod.com/content/ring-push"
  );

  exercises.rtoPushup = lastExercise = insertExercise("rtoPushup",
    exerciseTypes.strength,
    "Rings Turned Out Pushup",
    "Starting from a plank position with the rings turned out, perform a pushup while keeping the rings turned out.\n\nThis will feel alot like a pseudo planche pushup, but on rings."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=MrlyEIpe0LI&t=2m55s"
  );

  exercises.rtoPseudoPlanchePushup = lastExercise = insertExercise("rtoPseudoPlanchePushup",
    exerciseTypes.strength,
    "Rings Turned Out Pseudo Planche Pushup",
    "Starting from an RTO plank position, lean forward until your shoulders are in front of your hand. Perform a pushup while maintaining forward lean. Really protract and depress the shoulderblades at the top.\n\nIncrease forward lean to make it more difficult. Decrease forward lean to make it easier. You won't run out of resistance anytime soon if you keep increasing your forward lean."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=-kwe1EOiWMY"
  );

  exercises.pseudoPlanchePushup = lastExercise = insertExercise("pseudoPlanchePushup",
    exerciseTypes.strength,
    "Pseudo Planche Pushup",
    "Putting your hands sideways, lean forward with a straight body until your shoulders are in front of your hands. Perform a pushup while maintaining forward lean. Protract the shoulderblades at the top.\n\nIncrease forward lean to make more difficult. Decrease forward lean to make easier. You won't run out of resistance anytime soon if you keep increasing your forward lean."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "http://www.youtube.com/watch?v=Cdmg0CfMZeo"
  );

  exercises.verticalRows = lastExercise = insertExercise("verticalRows",
    exerciseTypes.strength,
    "Vertical Rows",
    "Perform a row, but with the body position vertical."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=e5fdh9_kH_Y"
  );

  exercises.inclineRows = lastExercise = insertExercise("inclineRows",
    exerciseTypes.strength,
    "Incline Rows",
    "Perform a row, but with the body position somewhere between vertical and horizontal. Go closer to horizontal to make it harder."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise - The guy in the video is a little bit too arched. Try to keep a straight body.",
    "http://www.youtube.com/watch?v=tDUWmbzs154"
  );

  exercises.horizontalRows = lastExercise = insertExercise("horizontalRows",
    exerciseTypes.strength,
    "Horizontal Rows",
    "Straight body\n* Elbows in\n* Arms straight at the bottom\n* Rings/bar to chest at the top\n* Don't let your shoulders shrug up"
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=dvkIaarnf0g"
  );

  exercises.wideRows = lastExercise = insertExercise("wideRows",
    exerciseTypes.strength,
    "Wide Rows",
    "It's okay to flare your elbows on this one. On a bar: take a wide grip (1.5 times shoulder width) and perform rows like this.\nOn rings: while performing a row, bring out the elbows to the side up to a 90 degree angle."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "http://www.youtube.com/watch?v=1yMRvsuk9Xg"
  );

  exercises.tuckFrontLever = lastExercise = insertExercise("tuckFrontLever",
    exerciseTypes.strength,
    "Tuck Front Lever",
    "The main points here are to actively depress and retract the scapulae, as well as keeping the elbows completely straight. There should be a strong activation of the lats (the big muscles on the outsides of your back) coupled with the depression."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=tiST0765Sfo"
  );

  exercises.tuckIceCreamMaker = lastExercise = insertExercise("tuckIceCreamMaker",
    exerciseTypes.strength,
    "Tuck Ice Cream Maker",
    "From the position in the top of a pullup, tuck your legs. Then, lean back while bringing the body horizontal. Lock out the arms (important!) and pause for a second in the tuck front lever position. Pull back up until your body is vertical."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise - The video shows a full Ice Cream Maker. For now, do these in a tucked position.",
    "https://www.youtube.com/watch?v=AszLwoAvLKg"
  );

  exercises.tuckFrontLeverRow = lastExercise = insertExercise("tuckFrontLeverRow",
    exerciseTypes.strength,
    "Tuck Front Lever Row",
    "From a tuck front lever position, pull up as far as you can while your body remains horizontal."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=F-xEL0Ot0HA"
  );

  exercises.advTuckFrontLeverRow = lastExercise = insertExercise("advTuckFrontLeverRow",
    exerciseTypes.strength,
    "Advanced Tuck Front Lever Row",
    "These are the same as tuck FL rows, but with the body less tightly tucked."
  );
  addLink(lastExercise,
    linkTypes.video,
    "Video of Exercise",
    "https://www.youtube.com/watch?v=cVdb8oUGKAw"
  );

  // *****************************
  // *            Rest           *
  // *****************************
  exercises.rest = lastExercise = insertExercise("rest",
    exerciseTypes.rest,
    "Rest",
    "Rest and Recover"
  );


}

function insertExercise(shortName, type, name, description) {
  Exercises.insert({
    "shortName" : shortName,
    "type" : type,
    "name" : name,
    "description": description
  });

  return Exercises.findOne({"shortName" : shortName});
}

function addLink (exercise, type, description, link) {
  Exercises.update({ shortName : exercise.shortName },
    {
      $push : {
        links :{
          "type" : type,
          "description" : description,
          "link" : link
        }
      }
    }
  );
}

function addWorkouts() {
  Workouts._ensureIndex('shortName', {unique: 1});
  fixture.Workouts = {};
  var exercises = fixture.Exercises;

  // *****************************
  // *         WARM UP           *
  // *****************************
  var warmup = {  // Section
    "name" : "Warm Up",
    "instruction": "Move swiftly from one exercise to the next.\n\nDynamic Stretches to get the joints nice and loose",
    "repeats" : 1,
    "sets" : [ // Sets
      {
        "description" : "Dynamic Stretches",
        "repeats" : 1,
        "activities" : [
          addActivity(exercises.wallExtension, "5-10", 5, 10),
          addActivity(exercises.bandDislocates, "5-10", 5, 10),
          addActivity(exercises.catCamel, "5-10", 5, 10),
          addActivity(exercises.bodyCircles, "5-10", 5, 10),
          addActivity(exercises.frontSideLegSwings, "5-10", 5, 10)
        ]
      }, {
        "description" : "Wrist Mobility",
        "repeats" : 1,
        "activities" : [
          addActivity(exercises.fingerPulses, "10-30", 10, 30),
          addActivity(exercises.palmPulses, "10-30", 10, 30),
          addActivity(exercises.ssPalmRolls, "10-30", 10, 30),
          addActivity(exercises.ffElbowRotations, "10-30", 10, 30),
          addActivity(exercises.ssWristStretchDown, "10-30", 10, 30),
          addActivity(exercises.rfWristStretchDown, "10-30", 10, 30),
          addActivity(exercises.rfWristStretchUp, "10-30", 10, 30),
          addActivity(exercises.rfElbowRotationsUp, "10-30", 10, 30),
          addActivity(exercises.ffWristStretchDown, "10-30", 10, 30)
        ]
      }, {
        "description" : "Bodyline Work",
        "repeats" : 1,
        "activities" : [
          addActivity(exercises.plank, "10-60s", 10, 60),
          addActivity(exercises.sidePlank, "10-60s", 10, 60),
          addActivity(exercises.reversePlank, "10-60s", 10, 60),
          addActivity(exercises.hollowHold, "10-60s", 10, 60),
          addActivity(exercises.arch, "10-60s", 10, 60)
        ]
      }
    ]
  };

  // *****************************
  // *          Extras           *
  // *****************************
  var extras = {
    "name" : "Extras", // Section
    "instruction": "Not sweating yet?  If not, pick one of these",
    "repeats" : 1,
    "sets" : [
      {
        "description" : "Activity - Pick one",
        "repeats" : 1,
        "activities" : [
          addActivity(exercises.squatJump, "10-20", 10, 20),
          addActivity(exercises.burpee, "10-20", 10, 20)
        ]
      }
    ]
  };

  // *****************************
  // *          Skill            *
  // *****************************
  var skill = {
    "name" : "Skill Work",
    "instruction": "",
    "repeats" : 1,
    "sets" : [
      {
        "description" : "Handstand Progression",
        "repeats" : 1,
        "activities" : [
          addActivity(exercises.wallPlank, "5-10 min", 5, 10),
          addActivity(exercises.wallHandstand, "5-10 min", 5, 10),
          addActivity(exercises.freeHandstand, "5-10 min", 5, 10)
        ]
      } , {
        "description" : "Support Practice",
        "repeats" : 1,
        "activities" : [
          addActivity(exercises.parallelBarSupport, "2-3 min", 2, 3),
          addActivity(exercises.ringSupport, "2-3 min", 2, 3),
          addActivity(exercises.rtoSupport, "2-3 min", 2, 3),
        ]
      }
    ]
  };

  // *****************************
  // *   Strength - First Pair   *
  // *****************************
  var strengthPair1 = { // Set
    "description" : "First Pair",
    "instruction": "90 Second rest between each exercise",
    "repeats" : 3,
    "activities" : [
      addActivity(exercises.pullup, "5-8", 5, 8, [
        addProgression(exercises.negativePullup),
        addProgression(exercises.pullup),
        addProgression(exercises.lsitPullup),
        addProgression(exercises.pullover)
      ]),
      addActivity(exercises.rest, "90 sec", 60, 180),
      addActivity(exercises.parallelBarDips, "5-8", 5, 8, [
        addProgression(exercises.parallelBarDips),
        addProgression(exercises.ringDips),
        addProgression(exercises.ringLsitDips),
      ]),
      addActivity(exercises.rest, "90 sec", 60, 180)
    ]
  };

  // *****************************
  // *  Strength - Second Pair   *
  // *****************************
  var strengthPair2 = { //set
    "description" : "Second Pair",
    "instruction": "90 Second rest between each exercise",
    "repeats" : 3,
    "activities" : [
      addActivity(exercises.squat, "5-8", 5, 8, [
        addProgression(exercises.assistedSquat),
        addProgression(exercises.squat),
        addProgression(exercises.deepStepUp)
      ]),
      addActivity(exercises.rest, "90 sec", 60, 180),
      addActivity(exercises.lsit, "10-30s", 10, 30, [
        addProgression(exercises.footSupportedLsit),
        addProgression(exercises.oneLegFootSupportedLsit),
        addProgression(exercises.tuckLsit),
        addProgression(exercises.advTuckLsit),
        addProgression(exercises.lsit)
      ]),
      addActivity(exercises.rest, "90 sec", 60, 180),
    ]
  };

  // *****************************
  // *   Strength - Third Pair   *
  // *****************************
  var strengthPair3 = { //set
    "description" : "Third Pair",
    "instruction": "90 Second rest between each exercise",
    "repeats" : 3,
    "activities" : [
      addActivity(exercises.pushup, "5-8", 5, 8, [
        addProgression(exercises.verticalPushup),
        addProgression(exercises.inclinePushup),
        addProgression(exercises.pushup),
        addProgression(exercises.diamondPushup),
        addProgression(exercises.ringsWidePushup),
        addProgression(exercises.ringsPushup),
        addProgression(exercises.rtoPushup),
        addProgression(exercises.rtoPseudoPlanchePushup),
        // How do I mark this as replacing options 5-8?
        addActivity(exercises.pseudoPlanchePushup)
      ]),
      addActivity(exercises.rest, "90 sec", 60, 180),
      addActivity(exercises.horizontalRows, "5-8", 5, 8, [
        addProgression(exercises.verticalRows),
        addProgression(exercises.inclineRows),
        addProgression(exercises.horizontalRows),
        addProgression(exercises.wideRows),
        addProgression(exercises.tuckFrontLever),
        addProgression(exercises.tuckIceCreamMaker),
        addProgression(exercises.tuckFrontLeverRow),
        addProgression(exercises.advTuckFrontLeverRow)
      ]),
      addActivity(exercises.rest, "90 sec", 60, 180),
    ]
  };
  var strength = { // Section
    "name" : "Strength",
    "instruction": "",
    "repeats" : 1,
    "sets" : [
        strengthPair1,
        strengthPair2,
        strengthPair3
    ]
  };

  var workout = {
    "shortName" : "redditBWF_Basic",
    "name" : "Reddit Body Weight Fitness",
    "url" : "http://reddit.com/r/bodyweightfitness",
    "sections" : [
      warmup,
      extras,
      skill,
      strength
    ]
  };
  Workouts.insert(workout);
  workout = Workouts.findOne({"shortName" : "redditBWF_Basic"});

  fixture.Workouts.redditBodyWeight = workout;
}

function addActivity(exercise, repDescription, minReps, maxReps, progression) {
  var activity = {
    "shortName" : exercise.shortName,
    "name" : exercise.name,
    "repDescription" : repDescription,
    "repMin" : minReps,
    "repMax" : maxReps
  };
  if (progression) {
    activity.progression = progression;
  }
  return activity;
}

function addProgression(exercise) {
  return {
    "shortName" : exercise.shortName,
    "name": exercise.name
  };
}

Meteor.startup(function(){
  Exercises.remove({});
  if (Exercises.find().count() === 0) {
    addExercises();
  }
  Workouts.remove({});
  if (Workouts.find().count() === 0) {
    addWorkouts();
  }
});
