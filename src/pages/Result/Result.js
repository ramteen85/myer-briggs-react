import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';

// https://github.com/ramteen85/myer-briggs/blob/master/app/controllers/outcome_controller.rb

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const personality = searchParams.get('personality')
    ? searchParams.get('personality')
    : 'Not Completed';
  const goBack = () => {
    // navigate to main page
    navigate('/members');
  };

  return (
    <AppContainer>
      <BoxContainer>
        <IntroHeaderContainer>
          <IntroHeader>Your Result: {personality.toUpperCase()}</IntroHeader>
        </IntroHeaderContainer>
        {personality === 'Not Completed' && (
          <ResultsContainer>
            This page cannot be displayed until you have selected a personality link or
            completed a test
          </ResultsContainer>
        )}
        {personality === 'ENFP' && (
          <ResultsContainer>
            <p>
              ENFP individuals are considered to be one of the most varied and adaptable
              types of characters and are typically referred to as 'inspirers.' As an ENFP
              grows up, his or her traits may exhibit a power play between the dominant
              and recessive features. Finding a balance between the intuitive extravert
              and the sensitive introvert will be an important part of an ENFP being able
              to decide what they want out of life. The extravert trait ensures that this
              character is open-minded and enthusiastic yet the intuitive portion of the
              personality allows the individual to be thoughtful and insightful. This
              combination can yield an idealistic individual with a lust for life and an
              appreciation for the feelings and motives of those around them. 'Inspirers'
              tend to have many interests and often excel in all areas that they really
              enjoy. They are multi-talented and, to outsiders, seem to be good at
              everything. This is likely due to this character’s passionate and
              enthusiastic nature which can be contagious to those around them, hence the
              nickname 'inspirer.'
            </p>
            <p>
              The ENFP’s keen intuition and sense of emotion enables the individual to
              pick up on the feelings of those around them. This kind of person also has
              an uncanny ability to read another person’s hidden agenda. Being a
              perceptive individual, he or she may also look for hidden meanings and is
              very good at listening to others and offering emotional support. ENFPs have
              a strong need to be liked by others and can sometimes, especially during
              childhood, act corny in an effort to be liked. This type of individual may
              have an excellent sense of humor which, as an extravert, will only encourage
              others to like them even more. This extravert is an excellent talker and has
              a knack for getting others to open up. If the individual’s moral values
              aren’t well developed then they could easily use their abilities to
              manipulate others.
            </p>
            <p>
              To outsiders, this sort of individual may seem like a wanderer with no
              direction or life plan. On the contrary, ENFPs are plagued with a need to
              figure out their purpose in life and may travel, try out many different
              activities and hobbies, and even switch religious views several times before
              finding out what best suits them. This is all part of the individual’s own
              endeavor to live life to the fullest. An ENFP’s mind is always mulling over
              possibilities and what-ifs. While this amped-up imagination is wonderful in
              moderation, it can be easy for individual to form expectations based upon
              their imaginings and become disappointed or bored with what reality has to
              offer. Boredom can drive this persona to act more impulsive than usual which
              could land him or her into trouble. Many individuals with this personality
              are not happy with the bog-standard life of a routine job and uneventful
              home life. In order for this sort of individual to really excel at a task,
              they have to have an interest in what they are doing; in which case they can
              perform very well with little or no supervision.
            </p>
          </ResultsContainer>
        )}
        {personality === 'ISFJ' && (
          <ResultsContainer>
            <p>
              ISFJ is primarily defined as being a caring, supportive, and selfless
              personality, which is why this persona carries the nickname 'nurturer.' This
              sort of individual is driven by the introverted sensing trait, which
              manifests as the ability to absorb concrete facts from the environment, mull
              over them internally, and then form an opinion or decision based on their
              own internal reaction. Conducting one’s self primarily as an introvert does
              not necessarily mean that this person would abstain from social interactions
              – quite the contrary. ISFJ likes to watch people and take in their
              surroundings. From an outsider’s point of view the ISFJ may appear to be
              daydreaming or simply uninterested in the goings-on, but in reality this
              individual is internally processing everything that takes place.
            </p>
            <p>
              Another side effect of being driven by the introverted sensing trait is that
              this person has a wonderful memory when it comes to information that they
              feel is important to them – usually in regards to their own strict system of
              values. It is not uncommon for an ISFJ individual to remember details about
              a person or a situation that others would grossly overlook, such as a facial
              expression, a comment, or even the pattern on an individual’s clothing. This
              intense form of recollection can even trigger emotional and physical
              responses from this character as if they are re-living the entire memory. A
              “nurturer” tends to rely on this gift as a means to help guide their
              decisions and actions in future situations. ISFJs are the epitome of
              learning through experience and will rely on past situations in order to
              avoid an undesirable outcome or to reenact a positive one. Once ISFJ has
              formed a solid opinion or feeling in regard to an experience, they are
              unlikely to change their mind unless they are given very sound evidence in
              support of an alternative measure. The same applies to an ISFJ’s opinion of
              people; after forming what they believe to be a very accurate picture of an
              individual’s personality, they are unlikely to change this interpretation
              without a groundbreaking new experience to disprove the initial opinion.
            </p>
            <p>
              'Nurturers' have a profound respect for tradition. By ISFJ’s logic, many
              existing structures remain in place because they work. Government, laws, and
              even social etiquette are a few examples of such systems. Their
              deeply-seated respect will ensure that ISFJ does not willingly break the law
              or go against what they believe, according to their system of values, to be
              right. 'Nurturers' believe deeply in the value of hard work and once they
              have set sight on a specific task they will try everything they can to see
              it through to the end. This type of person is also a wonderful organizer and
              can systematically execute daily tasks. These individuals may end up in
              clerical or administrative environment or one more appealing to their
              supportive nature, such as teaching, child care, or social services.
            </p>
          </ResultsContainer>
        )}
        {personality === 'ISFP' && (
          <ResultsContainer>
            <p>
              The ISFP personality is so enamored by aesthetics that it has earned the
              nickname “artist.” This character loves and appreciates any external source
              of inspiration and emotional conjuring. Artwork, a pretty landscape, music,
              and even food are all attractants to this persona. Introversion is ISFP’s
              dominant trait which means that they aren’t as much concerned with concrete
              facts but rather they process information based on how it makes them feel
              inside. The “sensing” part of this personality is where the love of beauty
              comes from. This individual uses major senses such as sight, touch, sound,
              taste, and smell to collect information which they can then process
              internally to form an opinion based on their internal reaction. A staggering
              amount of ISFPs possess some form of artistic gift. They have a knack for
              crafting things that elicit an emotional response from people, be it
              artwork, music, or even dancing.
            </p>
            <p>
              Although ISFPs are wonderful at generating an emotional response from
              others, they often struggle to express their own emotions. It isn’t that
              ISFPs are not emotional – they are actually extremely sensitive and
              emotional individuals – but they lack the finesse and, in most cases, the
              desire to share their feelings with others. “Artists” attempt to convey
              their emotions through action rather than words. If doing something special
              will make a friend happy, ISFP can be counted on to work diligently for the
              optimal outcome. An 'artist’s' emotions for those they care about can run
              extremely deep and for such individuals ISFP will be exceptionally warm and
              supportive.
            </p>
            <p>
              'Artists' are free-spirits who become immensely unhappy if others try to
              control them. Turning the table, these individuals will also never look to
              control others and are happy to encourage friends, partners, and family
              members to exercise their freedom and individuality. ISFP often has a unique
              way of doing things. They tend to steer clear of theories, ideas, and
              planning and instead opt for a hands-on learning experience. For this
              reason, ISFPs may become bored at school and tend not to do as well in
              academic pursuits, particularly those in math and science. They can,
              however, be very competitive. Many individuals with this personality will be
              driven by perfectionist tendencies; if they feel that they haven’t done well
              enough, they will unfairly judge and punish themselves. They are often too
              modest when credit is due.
            </p>
            <p>
              Those who don’t really know an 'artist' may mistakenly believe them to be
              flighty and unrealistic. Such individuals likely haven’t gotten to see the
              inner being of an “artist” nor have a realistic knowledge about the ISFP
              personality. Although the 'artist' may have a unique approach to life and
              place a lot of value on things that most individuals wouldn’t be bothered
              with, they are typically very reliable and loyal individuals.
            </p>
          </ResultsContainer>
        )}
        {personality === 'ISTJ' && (
          <ResultsContainer>
            <p>
              This persona is often viewed as a serious and reserved individual. Although
              not exactly shy, this kind of individual may certainly appear so around
              strangers. ISTJs are nicknamed 'the duty fulfillers' with good reason. These
              individuals place a lot of value on dependability and firmly aim to be the
              one that others can turn to with a task knowing that it will be successfully
              completed. This is the type of individual who would rather stay late at the
              office finishing off a project than to have to ask for an extension. He or
              she will not easily be distracted from the task at hand. Consequently, an
              ISTJ’s amazing work ethic and sense of duty and responsibility often results
              in being the go-to person when work needs to be done which can also result
              in being taken advantage of. The ISTJ may struggle to decline because they
              don’t like to let others down.
            </p>
            <p>
              'Duty fulfillers' are peace-loving individuals and will go to great lengths
              to avoid confrontation. These individuals crave security and are always
              looking for ways to make their lives more dependable and solid. These types
              of people are also great organizers and often succeed at any task that they
              set out to tackle. This is the type of person who doesn’t like to stray away
              from procedure and has a big problem breaking the rules. Their sense of
              loyalty and honor goes well beyond work and personal goals; this individual
              views relationships with the same code of ethics. When entering into a
              relationship, it is a given that this individual intends to be monogamous,
              faithful, and virtually traditional in most respects. Cheating wouldn’t
              cross ISTJ’s mind because it blatantly goes against all of his or her
              beliefs.
            </p>
            <p>
              The 'duty filler' may seem like a strict and boring individual but they also
              tend to have a quirky sense of humor that most people around them
              appreciate, especially friends, family members, and acquaintances. This
              specific persona suffers from the classic struggle of recognizing their own
              feelings and will find even more difficulty conveying their feelings to
              others. That being said, ISTJs can 'relax' a bit more around those that they
              really care about and can learn to overcome habitual obstacles in order to
              have a healthy and successful relationship. Maturity comes naturally to a
              'duty fulfiller,' so it is certainly within their ability to learn to be
              more forthcoming with their feelings. ISTJs are slower to pick up on the
              feelings of others, however learning to pay special attention to peoples’
              body language and facial expressions can help tune-up this individual’s
              ability to read emotions. Having said that, the “duty fulfiller” will
              probably never be as adept as intuitive personalities when it comes to
              sensing the emotions of others."
            </p>
          </ResultsContainer>
        )}
        {personality === 'ISTP' && (
          <ResultsContainer>
            <p>
              The ISTP character has a keen interest in learning how and why things work
              the way that they do. As a result, this personality has been nicknamed the
              'mechanic.' This persona makes up about five percent of the population.
              Introversion is the dominant trait in this persona which means that this
              type of person primarily pays attention to what goes on around them and then
              focuses on the gathered information internally using a logical thought
              process. The “mechanic” is usually more content watching people than
              interacting with them. Others might view this individual as being thoughtful
              and private. Although most often quiet and rational, the ISTP is a rare
              creature in the realm of personalities because they have the ability to
              gather energy in the recesses of their being until they finally explode with
              a moment of spontaneity and/or emotion – completely contrary to their
              "normal" persona. For this reason, even a long-term relationship with an
              ISTP can hold pockets of surprise.
            </p>
            <p>
              Although the ISTP will likely seem quiet on the outside, this person may
              actually be a thrill-seeker at heart. Many “mechanics” are enthralled by
              action and will be drawn to adrenaline-pumping activities such as bungee
              jumping or sky diving. Not all “mechanics” are adrenaline junkies, but they
              are much more likely to fulfil the role of a higher risk career such as a
              pilot or firefighter. This individual’s preference for a laid-back lifestyle
              ensures that they have plenty of time to try new things. They typically
              avoid planning and schedules and do not like to be backed into a proverbial
              corner – although they do tend to perform well when given a deadline.
            </p>
            <p>
              “Mechanics” are often thought to be unfeeling and unemotional. While it is
              true that this type of character doesn’t have a strong sense of emotion,
              they do tend to let emotions build up under the surface. When a situation
              becomes particularly stressful or if the individual has been subjected to
              high stress levels for a prolonged period of time, he or she may erupt in an
              angry or otherwise emotional outburst. Such occurrences are typically rare
              but will likely crop up enough that friends, family members, and even
              coworkers will begin to notice the correlation between heightened stress
              levels and emotional surges in this person. For a mate, this kind of
              reaction can usually be avoided by easing the general stress level in their
              partner’s life wherever possible. Whereas stress can trigger fits of anger,
              this kind of individual can also produce positive “emotional attacks” in
              which they become exceptionally sweet, romantic, or generous to those close
              to them.
            </p>
          </ResultsContainer>
        )}
        {personality === 'INFJ' && (
          <ResultsContainer>
            <p>
              The standard traits of INFJ individuals (introverted, intuitive, feeling,
              and judging) create only a basic template for this personality. The nickname
              for this type of disposition is “The Protector.” Being an observant and
              compassionate soul, individuals with this kind of persona will go to great
              lengths to avoid hurting or upsetting others and are very protective of
              those they care about. Although easy to approach due to their warmth and
              gentility, “protectors” are also perfectionists who strive to create order
              and flawlessness in their worlds. This character type tends to be very
              creative and artistic, especially in the field of writing due to their
              profound understanding of emotion and keen eye for detail. Being an INFJ is
              as close as a human might come to being empathic. This kind of individual is
              sensitive, perceptive, and highly likely to stick with a gut instinct about
              a person or situation; and their instincts are usually right. As prone as
              this character is to picking up on others’ feelings, intentions, and general
              personality traits, this particular individual will be less likely to offer
              up their own feelings and may be accused of “holding back” in their
              relationships, primarily romantic ones.
            </p>
            <p>
              Their penchant for self-reliance can be an issue, especially in a
              relationship. An INFJ is so used to relying on his or her own instincts
              (using the “I’m always right” justification) that they may have a tendency
              to dismiss others’ opinions, sometimes even before they have a chance to
              listen to the other party. This can be exceptionally problematic when a
              partner picks up on this unbalance and questions his or her value in the
              relationship. Their natural attention to detail and perfectionism leads to
              less fun in a teamwork situation. In fact, INFJs often prefer to work alone
              because, in their opinion, that’s the only way that everything will be done
              to their high standard. In a relationship, this persona may become annoyed
              with a partner who introduces chaos to their carefully crafted environment.
              Turning the tables, INFJs can irritate partners by frequently striving for
              perfection which often overflows into the relationship itself. A “protector”
              can be controlling in that he or she takes to planning and organizing well
              in advance and will often make decisions single-handedly. This stubborn
              character will frequently reassess the priorities in their life to ensure
              that they live up to their full potential, though rarely will they feel as
              though they have achieved this high goal.
            </p>
          </ResultsContainer>
        )}
        {personality === 'INFP' && (
          <ResultsContainer>
            <p>
              The INFP, or “Idealist” is a character that has a very active imagination.
              They tend to not only see the best in the people around them, but they may
              also be led to imagining characteristics and motives in others that simply
              aren’t there. Much like the INFJ, INFPs really dislike conflict and will go
              to great lengths to avoid an argument and see that everyone is happy. When a
              conflict does arise, this persona may have a profound emotional reaction. To
              outsiders, the outburst can see over the top and absurd, but the INFP has a
              very “internal” thought process in which they struggle to see the logical or
              factual side of things. They often go by their feelings rather than what
              science, facts, or logic suggests. Most individuals with this type of
              personality do not really care if their opinion is right, they simply care
              about how a situation or a person makes them feel. That is not to say that
              these individuals cannot be logical – they can, quite successfully, with
              self-training and abstract thought practices.
            </p>
            <p>
              Aside from being introverted and internal, “idealists” can be very laid-back
              and intuitive of those around them. They can get a pretty good sense about a
              person’s true self (including motives) and are very thoughtful of their
              findings. INFPs make great listeners and because they are usually
              non-judgmental they are often sought out by friends who need to vent. This
              sort of individual may look for hidden meanings in the actions and words of
              others and may even go so far as to imagine a meaning where none lies. This
              is simply a result of the dreamer aspect of this personality shining
              through.
            </p>
            <p>
              INFPs tend to be perfectionists and often strive to reach personal ideals
              that can be exhausting or even impossible to obtain. Teamwork is a difficult
              scenario for this person to be in because they often have higher goals or
              expectations for the project than the other team members; this can cause an
              INFP to come off as a control freak. In a relationship, this persona will be
              looking for inspiration, stimulation, and passion. They feed off of the
              emotions that others can generation within them. Although this type of
              individual may have difficulty expression his or her feelings through words,
              INFPs are great at writing down their feelings. Due to his or her keenly
              developed imagination, one such as this would likely make an excellent
              author.
            </p>
          </ResultsContainer>
        )}
        {personality === 'INTJ' && (
          <ResultsContainer>
            <p>
              INTJ is more than just a thinker or idea factory. This individual is
              nicknamed \“scientist\” or \“strategist\” because they see the world as a
              plethora of possibilities waiting to be discovered. The primary function of
              a \“scientist\” is introverted intuition. This individual gathers
              information and then processes the data in a manner that is more abstract
              than fact-based. \“Scientists\” like to consider that all things are linked
              to possibility and have a potential for improvement and growth. This
              character is very logical when it comes to making decisions and typically
              does not have a problem with being proven wrong because they so enjoy being
              introduced to new ideas and procedures, especially those which can be put to
              practical use. INTJ is the most likely persona to be referred to as a
              \“bookworm;\” they love to learn and, even more, put to use the knowledge
              and ideas that they have gathered. This sort of person is capable of being
              proficient in several areas of expertise although they will usually choose
              to master one particular subject, in which they will likely pursue a career.
              The \“strategist\” prides his or her self in having a strong mind and these
              individuals can excel in some of the most challenging and innovative fields
              such as engineering and science.
            </p>
            <p>
              INTJ is definitely a perfectionist at heart. Planning, rules, and deadlines
              help to reinforce the sense of order that INTJ craves. This person would be
              greatly put-off by disorder and messiness because they not only find it
              distracting but also inefficient. “Scientists” will devote a massive amount
              of energy to ensure that a project turns out as well as possible. They are
              especially dedicated to pursuits that strike up feelings of intrigue or
              exhilaration. Although INTJ definitely prefers to be in a tidy and
              productive environment, they can become frustrated in a stifling
              environment. This is especially true with romantic relationships, as INTJ
              needs to be able to have the freedom to seek out and mull over new concepts.
              They can be counted on to think “outside the box” and come up with an
              unconventional yet practical resolution.
            </p>
            <p>
              {' '}
              “Strategists” have a very independent nature which prevents them from
              falling in line with social trends. This type of person has a knack for
              seeing the true value of an idea or process and will eagerly pursue it, even
              if no one else supports the endeavor. In a social setting, this individual
              may come across as standoffish because they spend so much time playing
              around in the world inside their mind. They have no fear of confrontation
              and therefore can cross over into judgmental territory if they feel that
              someone is wasting time. Bear in mind that INTJ is generally open-minded to
              the abstract, but they will not hesitate to shoot down an idea or opinion
              that seems illogical, that is, based primarily on emotional support. The
              INTJ has little patience for individuals who exhibit behavior that they feel
              is irrational, such as an explosion of anger or bursting into tears (unless
              seriously provoked).
            </p>
            <p>
              INTJs are not adept at reading the emotions of others or at conveying their
              own emotions. For this reason, they have a difficult time placing themselves
              into another person’s shoes. Supporting or nurturing emotional reactions is
              of little use for a “scientist” because they struggle to see the
              practicality. It is not uncommon for this kind of person to overlook
              specific factors in a person’s life that may account for such an emotional
              reaction. In social settings, this behavior might seem cold, especially if
              the INTJ fails to recognize when bluntness may be inappropriate.
            </p>
          </ResultsContainer>
        )}
        {personality === 'INTP' && (
          <ResultsContainer>
            <p>
              The INTP personality is referred to as the \“thinker.\” This kind of person
              has a bright and curious mind that is always mulling over possibilities,
              theories, and what-ifs. The dominant features of the personality is the
              introverted thinker. This type of individual is mostly concerned with what’s
              going on in his or her own little world instead of what might be taking
              place in reality. Being gifted with such a wonderful thought process,
              \“thinkers\” are more likely to view reality as a let-down as they compare
              it to the possibilities that they often think about. This analytical
              personality loves to mull over things and will often wander so deeply into
              the recesses of their own mind that to an outsider, they may appear
              disinterested, detached, or even anti-social. Some of history’s most famous
              scientific and philosophic minds fall into the \“thinker\” category, such as
              Socrates, Sir Isaac Newton, and Albert Einstein.
            </p>
            <p>
              Naturally prone to introversion, INTPs aren’t the most forthcoming
              individuals where feelings are concerned. They have many depths to their
              personality, each of which will be revealed if and when they deem an
              individual worthy. Until then, this type of individual may seem somewhat out
              of reach unless the subject of conversation drifts into a realm in which
              they have an interest. \“Thinkers\” can become very passionate about
              subjects that they find fascinating and can talk for hours about their ideas
              on such topics. This kind of individual is most likely to have a small group
              of friends, typically ones who share common interests and opinions. Although
              \“thinkers\” may appear to be day dreaming or completely out-o-tune with
              their surroundings, they will pay close attention if they hear details that
              perk their analytical instincts. They often spot liars very easily due to
              their extraverted intuition and their ability to recall and compare
              statements to zone-in on any incongruities.
            </p>
            <p>
              The INTP is a laid back personality that is happy to let things slide.
              However, they may be roused into a clever and impassioned defense against
              statements that they feel are wholly incorrect or that hit too close to home
              with a topic that they feel strongly about. Their enthusiasm may also shine
              when they get the opportunity to work their problem solving skills. Close
              friends may even seek out this individual to help them find a solution to a
              problem. A “thinker” will drill through all of the details, view a situation
              from all angles, and come up with a viable solution. That being said, INTPs
              typically cannot stand to engage in a standard routine. These individuals
              crave new ideas and jumping on intriguing problems. Mundane everyday
              activities make INTPs bored and unhappy. With such a creative and
              imaginative nature, INTPs are best suited to roles that can keep the mind
              stimulated.
            </p>
          </ResultsContainer>
        )}
        {personality === 'ESTP' && (
          <ResultsContainer>
            <p>
              ESTP individuals display extraverted sensing as a dominant function. In
              society, this type of person is likely to be labeled as a “doer”. “Doers”
              primarily focus their energy on the environment around them. They use their
              basic senses to pull information from their surroundings and then process
              the data internally via a logical, objective system. This natural “people
              person” gets along well with others and is probably the first to strike up a
              conversation with a stranger. By nature, a “doer” is not likely to cower
              from the idea of rejection because this individual is all about taking
              risks. Their motto is likely to be something along the lines of, “If you
              don’t try, nothing will definitely happen. If you do try, you stand the
              chance that something might occur.”
            </p>
            <p>
              ESTP is prone to making impulsive decisions. They often feel that the best
              answer is to jump in and get it over with. The impulse to “do” is so strong
              in this individual that they may not take the time to properly consider all
              pertinent information or wait to see if new information will come to light.
              ESTP is definitely the type of individual who could easily fall into money
              trouble, especially if they have the opportunity to gamble. Spending large
              amounts of money (or spending money that they don’t have) can be a serious
              side effect of their impulsive nature. Although the need for action can
              certainly get this sort of person into a sticky situation every once in a
              while, for the most part their willingness to work and the desire to bask in
              the satisfaction of a completed task will serve them quite well.
            </p>
            <p>
              To an outsider, ESTP is confident, upbeat, and stylish. A “doer” tends to
              have a wonderful storyteller-like aura that can lure others into a
              conversation. They often have a very expressive face and may use hand
              gestures to help convey a description or gain a person’s attention. Their
              theatrical nature paired with quick wittedness enables ESTP to improvise at
              the drop of a hat – a gift that they may use in order to get what they want.
              They also have the ability to read another person’s emotions and personality
              very well and can predict the next phase in a conversation. If necessary (or
              if the individual does not have a well-developed sense of right and wrong),
              ESTP will use this ability to guide a person into saying or doing what they
              want.
            </p>
            <p>
              ESTP is an energetic and fun personality that draws people like a moth to
              the light. Their enthusiasm to act can be contagious and is very helpful in
              a work environment or romantic relationship. The \“doer\” likely has many
              talents and may be viewed as a sort of Renaissance man or woman. If they tap
              into the right well of interest and knowledge, they can achieve astounding
              feats.
            </p>
          </ResultsContainer>
        )}
        {personality === 'ENTP' && (
          <ResultsContainer>
            <p>
              In the world of Myers-Briggs personalities, the ENTP is referred to as the
              “visionary”. This type of individual is primarily driven by an extraverted
              intuition which means that they are intrigued by what goes on in their
              environment and will likely base their opinions and actions on feelings
              rather than an internal, logical thought process. This individual pays a
              great deal of attention to the situations and people around them and will
              gain a very quick and accurate idea about what is going on. These
              individuals tend to excel in academics, politics, and business.
            </p>
            <p>
              Although generally laid-back in nature, easy to talk to, and often possessed
              of a great sense of humor, ENTP characters can also come off as
              argumentative. This persona loves the thrill of engaging in a debate and may
              or may not be concerned about the topic being discussed. In most cases,
              however, this type of individual will have fairly good knowledge and
              interest in the topic. For some, especially those who are a little less
              mature than they could be, the desire to engage in a thrilling debate or
              argument could be so compelling that they will continuously push through the
              debate even if they do not care for or even support their own side of the
              argument. This can be annoying and infuriating to friends, family members,
              and partners, especially those who may not understand that ENTP isn’t trying
              to emotionally attack or humiliate them – “visionaries” simply love the
              thrill of having their wit tested on the spot and view this sort of
              situation as a mental exercise.
            </p>
            <p>
              ENTP is all about possibilities and knowledge. This individual is skilled in
              brainstorming and is often viewed by others as an \“idea person.\” Some
              ENTPs will have several plans and ideas going on at once and although the
              plans may be sound, this kind of person will often lack the determination to
              put their ideas into action. One such individual may be wonderful at
              creating concepts and might even get started on implementing a project, but
              will eventually lose interest in the \“work\” before it is complete. This
              might be a side effect of having so many new ideas developing at once which
              causes the ENTP to quickly lose interest in a current project.
            </p>
            <p>
              This outgoing individual is a great speaker and has a knack for engaging
              others in witty conversation. Their mind works quickly and they are often
              able to respond rapidly to inquiries. In a typical conversation this persona
              has the ability to keep a conversation going by adding new ideas or coming
              up with humorous anecdotes on-the-fly. For all of ENTP’s ability to quickly
              absorb information from his or her surroundings, the area in which this
              personality struggles the most tends to be in the sensing-feeling
              department. This persona may inadvertently hurt others’ feelings, fail to
              truly listen to others, and may come across as aggressive in some
              situations. An underdeveloped “visionary” may not even think to ask if a
              partner, friend, or co-worker has an opinion or feelings about the matter at
              hand. In fact, this issue can be so badly undeveloped in an individual that
              he or she simply doesn’t care what others have to say or refuses to give any
              consideration to the input of other people. Mature, well-rounded
              “visionaries” on the other hand, can learn to value input from other people
              and can even inspire others to utilize their idea-forming skills.
            </p>
          </ResultsContainer>
        )}
        {personality === 'ESFJ' && (
          <ResultsContainer>
            <p>
              ESFJ is usually referred to as the “caregiver” because they feel driven
              towards caring and supporting those around them. This type of individual is
              a typical extravert because they like to live life based on what is going on
              around them. They absorb external information and then process it
              internally. The “caregiver” is a genuinely warm and approachable personality
              that people just love to be around – family, friends, and strangers alike!
              They have an amazing skill to make others feel good about themselves and, in
              turn, this wins the “caregiver” approval and affection from others, as well
              as the satisfaction of seeing people happy. Emotionally, this persona feeds
              off of how well they do their job, with the primary goal being to ensure
              that the people they care for are happy and thriving. ESFJ doesn’t have a
              problem being around strangers; in fact, they can reap a lot of satisfaction
              by winning acceptance from strangers which, in turn, will boost their own
              happiness and sense of self-worth.
            </p>
            <p>
              The “caregiver” is primarily a “sensing” individual, but they do have a
              decent skill level for reading others. The sensing trait in this individual
              means that he or she pays very careful attention to what is happening in
              reality and is very unlikely to add imaginative details or to elaborate.
              When replaying a memory, this type of individual will be able to recall the
              true details of the situation without substituting details from their
              imagination. This logical-minded individual will easily gather facts about a
              person until they have them "figured out.” ESFJ is a feeling individual
              which means that they would rather consider the opinions and feelings of
              others than to mull over the cold, hard facts. At the end of the day, this
              person really wants everything to work out nicely for the people they care
              for and may feel like a failure if someone can’t be shaken out of a bad or
              unhappy mood.
            </p>
            <p>
              This outgoing persona tries to mediate peace whenever possible. They hate to
              witness or be part of an argument. Being reliant on the approval of others
              in order to find their own happiness, a “caregiver” can be wounded and
              distraught if someone is unresponsive to them or simply doesn’t like them.
              They may take this as a personal failure and feverishly try to figure out
              why a certain individual doesn’t want to be around them. In a relationship,
              this sensitivity can come off as neediness, but in reality the ESFJ simply
              wants to be able to make their partner happy and craves communication as a
              way to confirm that they have succeeded in their mission.
            </p>
          </ResultsContainer>
        )}
        {personality === 'ESFP' && (
          <ResultsContainer>
            <p>
              The ESFP persona has rightfully earned the nickname “entertainer.” Charisma,
              wit, and generosity are traits that are deeply woven into this character.
              They are energetic, animated speakers who possess a warmth that makes them
              very approachable. People are drawn to “entertainers” because they have such
              an appealing and contagious attitude. Being around entertainers often leaves
              onlookers feeling better about themselves and life in general. When others
              around them feel good, ESFPs feed off of the “vibes” and become happier as
              well. Possessed with a dramatic flair and a solid sense of creativity, this
              individual would do well to pursue a career in the arts such as acting,
              painting, or decorating.
            </p>
            <p>
              “Entertainers” display extroverted sensing as a dominant trait which
              accounts for their personable, welcoming aura. They are easy to talk to and
              are fairly good at reading other peoples’ emotional states (thanks to the
              sensing and feeling combination). ESFP wants everyone to feel as happy as
              they and if they pick up on distress or unhappiness in a friend, they will
              do whatever it takes to put a smile on their face. This persona is very good
              at being emotionally supportive to those who need a boost. In tense
              situations, the ESFP will also take on the role of peacemaker.
            </p>
            <p>
              The “entertainer” has a keen eye for aesthetics and prefers to be surrounded
              by pretty things. This person will usually have a well-kept home that has
              been impressively decorated. With a fondness for art, the ESFP would most
              likely use sculptures, paintings, and other unique and eye-drawing pieces to
              decorate their home. One issue with this individual’s impulsive nature is
              that they may give in to the urge to spend money (sometimes large sums) on
              items that catch their eye. For those who can afford this type of spending
              habit the consequences will likely remain minimal; however one who cannot
              afford to spend large sums of money on impulse can get into serious
              financial trouble. This scenario becomes even more problematic in a romantic
              relationship.
            </p>
            <p>
              Overall, this individual is laid-back and does not do well when subjected to
              large amounts of stress. ESFP prefers to take each moment by stride and can
              easily become overwhelmed if exposed to negative situations or unhappiness
              for a long period of time. The “entertainer” is likely to use mild excuses
              to ignore the underlying issue but in the end usually gets over these
              negative feelings and moves on.
            </p>
          </ResultsContainer>
        )}
        {personality === 'ESTJ' && (
          <ResultsContainer>
            <p>
              The ESTJ persona is what some might refer to as the “guardian” type. A
              person with this type of character typically has no issues taking charge and
              are usually good leaders. They use their dominant extraverted sensing trait
              to collect solid data from an environment, situation, or individual and then
              try to discover the next logical course of action. A “guardian” type is
              often not interested in information that is subjective or emotional. Some
              individuals with this persona may not have patience for people who are
              overly emotional, lazy, or inefficient. The nature of the “guardian” is to
              be a hardworking, contributing, and reliable member of society. They have a
              firm set of ideals and take their responsibilities very seriously.
            </p>
            <p>
              Ever the extravert, ESTJ gets along very well with others. They enjoy being
              in social situations and can be counted on to strike up a conversation with
              a stranger. Being socially accepted can mean a great deal to ESTJ and
              therefore they tend to go out of their way to be a part of groups such as a
              local council and the parent teacher association. This all plays into ESTJ’s
              value system. This is a traditional sort of person who has a strict list of
              priorities. Those who are religious tend to give their religious beliefs the
              highest priority, followed by their family, friends, and work
              responsibilities. This individual has an incredible backbone and if they
              feel that their values are being threatened then they will take any action
              necessary to preserve that which they hold dear. These “red-blooded”
              individuals are likely to abide by the law, support their government, vote
              regularly, and take pride in having a well-presented home.
            </p>
            <p>
              Although “guardians” may seem straight-laced, they are also very personable.
              These individuals possess a sharp mind and a great sense of humor. They can
              often pull outsiders into a conversation simply by being such animated and
              captivating speakers. Others tend to feel happy around them because they
              have a contagious spirit. They prefer to appear jovial in public, even if
              they aren’t completely happy on the inside. A “guardian” would prefer to
              make others happy and may forget to consider their own desires in the
              process. If left unsatisfied, the ESTJ may suddenly realize one day that
              their dreams have gone unfulfilled and may take drastic action in a
              last-ditch attempt to gain some satisfaction.
            </p>
          </ResultsContainer>
        )}
        {personality === 'ENTJ' && (
          <ResultsContainer>
            <p>
              The ENTJ persona bears the nickname “the executive.” “Executives” often
              thrive in work environments and are likely to climb the corporate ladder
              very easily. Some also refer to this type of persona as "the moneymaker”
              because statistically speaking this character would be likely to have a
              lucrative and successful career. These individuals are extremely well-suited
              for leadership roles. Being an extraverted thinker, this kind of individual
              has no problem discovering what needs to be done and then delegating tasks
              for others to carry out. To outsiders, ENTJ can seem cold, blunt, and bossy
              – and in truth, they can be but this usually stems from their certainty
              about a solution and the steps necessary to make it come to fruition. ENTJs
              have an aptitude for business that comes as naturally to them as breathing.
              Whether this individual pursues an office career, fills the role of a
              salesperson, or makes the move into entrepreneurship, this charismatic and
              inspiring personality will most likely find a way to be top-notch at what he
              or she is doing and will find a way to profit from it.
            </p>
            <p>
              These individuals are extraverts which means that they prefer to live their
              lives externally by observing and processing that which goes on in reality.
              ENTJs like to take in their environment and use their razor-sharp problem
              solving skills to turn problems into solutions. Although very good at coming
              up with their own solutions and ideas, ENTJ is also genuinely happy to
              listen to the ideas of others and encourages those around them to be as
              energetic and passionate as he or she is. This kind of attitude can be very
              inspirational, especially in a romantic relationship. That being said, this
              individual also has high expectations and will take it to heart if someone
              they care about falls short of what the “executive” expects.
            </p>
            <p>
              ENTJ is a planner and is very good about mapping long-term goals for the
              future. Their gift of gab and alluring personality would make it easy for a
              potential partner to find out whether this individual intends to head down
              the same life path as they. The “executive” is not afraid to speak up if
              they think something can be done in a more productive way or if they feel
              that someone isn’t putting forth enough effort as they could. The
              “executive” can be strongly opinionated, assertive, highly confident, and
              even outright argumentative. Getting into a debate with this kind of person
              certainly wouldn’t be a good move for the faint-of-heart, as this individual
              has a sharp wit and will let “zingers” fly. ENTJ does have a less-dominant
              intuitive nature that can pick up on the feelings and motives of others, and
              while they may seem uncaring about the feelings of others, they often harbor
              strong feelings of affection and tenderness towards those they care about.
              ENTJ can even be sentimental, although this usually comes out in sporadic
              bursts rather than a continuous stream of romanticism.
            </p>
          </ResultsContainer>
        )}
        {personality === 'ENFJ' && (
          <ResultsContainer>
            <p>
              ENFJs are very tuned in to what others are feeling and they genuinely want
              those they care about to be happy. This can often manifest into a form of
              generosity that has earned this persona the nickname “giver.” “Givers” have
              a genuine need to entertain and indulge others because they enjoy the sense
              of acceptance that comes from their actions. The ENFJ’s excellent
              communications skills and personable aura make it easy to not only talk to
              others but to strike up conversations with complete strangers – and leave
              them thoroughly charmed. “Givers” have a highly sensitive ability to pick up
              on what another individual is feeling and can usually get a person to open
              up with ease.
            </p>
            <p>
              This need to be loved and accepted by others can go so deeply that an ENFJ
              may even drift into chameleon mode where he or she senses the moods and
              motives of others and imitates them. Essentially, they will become the type
              of individual that others want to be around. For the most part this is a
              harmless trait but it can become problematic if used in excess, especially
              around an ENFJ’s partner. The chameleon-like ability can be a wonderful tool
              when used to speak to a crowd of people, but even without the use of this
              ability the “giver” is a very charismatic and passionate speaker who has the
              ability to mesmerize others. “Givers” would do well in a leadership role
              such as a teacher, motivational speaker, or even a politician.
            </p>
            <p>
              “Givers” are fun to be around. They have a welcoming nature that makes them
              very approachable and trustworthy. Typically, a friend or partner’s trust
              would be well-placed because ENFJ individuals have a strong sense of loyalty
              and a desire to make others happy. This type of personality is more likely
              to overlook whether social actions are right or wrong because they become so
              consumed with social normalcies and expectations and are driven by the
              desire to be accepted by others. On the other hand, ENFJs may become so
              desperate for approval from others that they may behave oddly or outside of
              the realm of social regularity. This may be portrayed as saying or doing
              something in public or around strangers that most people would consider
              inappropriate. “Givers” must be careful who they welcome into their circle
              of close friends, as the desire to avoid conflict can cause them to
              continuously overlook or forgive mistreatment by a “friend” or group of
              people.
            </p>
          </ResultsContainer>
        )}
        <ButtonContainer>
          <Button onClick={() => goBack()}>Done</Button>
        </ButtonContainer>
      </BoxContainer>
    </AppContainer>
  );
};

export default Result;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ababab;
`;

const BoxContainer = styled.div`
  min-width: 500px;
  max-width: 600px;
  width: 60%;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    min-width: 400px;
  }

  @media (max-width: 400px) {
    min-width: 280px;
  }
`;

const IntroHeaderContainer = styled.div`
  padding: 1rem;
  color: white;
  background: rgb(52, 20, 175);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IntroHeader = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  width: 100%;
  text-align: center;

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-height: 500px;
  overflow: auto;

  & > p {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
`;

const ButtonContainer = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  width: fit-content;
  padding: 0.5rem;
  min-width: 10rem;
  margin-right: 1rem;
  cursor: pointer;
  background: rgb(52, 20, 175);
  color: #fff;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;

  &:hover {
    background: green;
  }

  &:disabled {
    background: #ececec;
    cursor: not-allowed;
  }

  @media (max-width: 950px) {
    font-size: 0.8rem;
    padding: 0.2rem;
    min-width: 6rem;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
    margin-right: 0;
    margin-bottom: 0.3rem;
  }
`;
